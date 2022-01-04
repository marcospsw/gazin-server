import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateNivelDTO } from './dtos/create-nivel.dto';
import { GetNiveisResponseDTO } from './dtos/get-niveis-response.dto';
import { UpdateNivelDTO } from './dtos/update-nivel.dto';
import { Nivel } from './entities/nivel.entity';
import { NiveisError } from './errors/niveis-errors';

@Injectable()
export class NiveisService {
  constructor(
    @InjectRepository(Nivel)
    private repository: Repository<Nivel>,
  ) {}
  async findAll(): Promise<any> {
    const niveis = await this.repository
      .createQueryBuilder('nivel')
      .leftJoinAndSelect('nivel.desenvolvedores', 'desenvolvedor')
      .getMany();

    const response: GetNiveisResponseDTO[] = niveis.map((nivel) => ({
      id: nivel.id,
      nivel: nivel.nivel,
      created_at: nivel.created_at,
      updated_at: nivel.updated_at,
      desenvolvedoresCount: nivel.desenvolvedores.length,
    }));

    return response;
  }

  async findOne(id: string): Promise<Nivel> {
    const nivel = await this.repository
      .createQueryBuilder('nivel')
      .leftJoinAndSelect('nivel.desenvolvedores', 'desenvolvedor')
      .where('nivel.id = :id', { id })
      .getOne();

    if (!nivel) {
      throw new NiveisError.NivelNotExists();
    }

    return nivel;
  }

  async put(id: string, { nivel }: UpdateNivelDTO) {
    const nivelExists = await this.repository.findOne(id);
    if (!nivelExists) {
      throw new NiveisError.NivelNotExists();
    }

    await this.repository.update(id, { nivel, updated_at: new Date() });

    return await this.repository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    const nivel = await this.repository.findOne(id);
    if (!nivel) {
      throw new NiveisError.NivelNotExists();
    }

    await this.repository.remove(nivel);
  }

  async create({ nivel }: CreateNivelDTO): Promise<Nivel> {
    const formattedNivel = nivel.toLowerCase();

    const nivelExists = await this.repository.findOne({
      nivel: formattedNivel,
    });
    if (nivelExists) {
      throw new NiveisError.NivelAlreadyExists();
    }

    const createdNivel = this.repository.create({ nivel: formattedNivel });

    return await this.repository.save(createdNivel);
  }
}
