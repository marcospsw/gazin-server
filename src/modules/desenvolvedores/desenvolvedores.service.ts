import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDesenvolvedorDTO } from './dtos/create-desenvolvedor.dto';
import { UpdateDesenvolvedorDTO } from './dtos/update-desenvolvedor.dto';
import { Desenvolvedor } from './entities/desenvolvedor.entity';
import { DesenvolvedoresError } from './errors/desenvolvedores-errors';

@Injectable()
export class DesenvolvedoresService {
  constructor(
    @InjectRepository(Desenvolvedor)
    private repository: Repository<Desenvolvedor>,
  ) {}
  findAll(): Promise<Desenvolvedor[]> {
    return this.repository
      .createQueryBuilder('desenvolvedor')
      .leftJoinAndSelect('desenvolvedor.nivel', 'nivel')
      .getMany();
  }

  async findOne(id: string): Promise<Desenvolvedor> {
    const dev = await this.repository
      .createQueryBuilder('desenvolvedor')
      .leftJoinAndSelect('desenvolvedor.nivel', 'nivel')
      .where('desenvolvedor.id = :id', { id })
      .getOne();
    if (!dev) {
      throw new DesenvolvedoresError.DesenvolvedorNotExists();
    }

    return dev;
  }

  async put(
    id: string,
    {
      nome,
      hobby,
      datanascimento,
      idade,
      sexo,
      nivel_id,
    }: UpdateDesenvolvedorDTO,
  ) {
    const devExists = await this.repository.findOne(id);
    if (!devExists) {
      throw new DesenvolvedoresError.DesenvolvedorNotExists();
    }

    await this.repository.update(id, {
      nome,
      hobby,
      datanascimento,
      idade,
      sexo,
      nivel_id,
      updated_at: new Date(),
    });

    return await this.repository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    const dev = await this.repository.findOne(id);
    if (!dev) {
      throw new DesenvolvedoresError.DesenvolvedorNotExists();
    }

    await this.repository.remove(dev);
  }

  async create({
    nome,
    hobby,
    datanascimento,
    idade,
    sexo,
    nivel_id,
  }: CreateDesenvolvedorDTO): Promise<Desenvolvedor> {
    const formattedNome = nome.toLowerCase();

    const devExists = await this.repository.findOne({
      nome: formattedNome,
    });
    if (devExists) {
      throw new DesenvolvedoresError.DesenvolvedorAlreadyExists();
    }

    const createdDev = this.repository.create({
      nome,
      hobby,
      datanascimento,
      idade,
      sexo,
      nivel_id,
    });

    return await this.repository.save(createdDev);
  }
}
