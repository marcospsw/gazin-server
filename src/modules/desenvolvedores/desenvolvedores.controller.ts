import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { DesenvolvedoresService } from './desenvolvedores.service';
import { CreateDesenvolvedorDTO } from './dtos/create-desenvolvedor.dto';
import { UpdateDesenvolvedorDTO } from './dtos/update-desenvolvedor.dto';
import { IDesenvolvedor } from './interfaces/IDesenvolvedor.interface';

@Controller('desenvolvedores')
export class DesenvolvedoresController {
  constructor(private readonly desevolvedoresService: DesenvolvedoresService) {}

  @Get()
  async get(): Promise<IDesenvolvedor[]> {
    return await this.desevolvedoresService.findAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<IDesenvolvedor> {
    return await this.desevolvedoresService.findOne(id);
  }

  @Post()
  async create(@Body() data: CreateDesenvolvedorDTO): Promise<IDesenvolvedor> {
    return await this.desevolvedoresService.create(data);
  }

  @Put(':id')
  async put(
    @Param('id') id: string,
    @Body() data: UpdateDesenvolvedorDTO,
  ): Promise<IDesenvolvedor> {
    return await this.desevolvedoresService.put(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    return await this.desevolvedoresService.remove(id);
  }
}
