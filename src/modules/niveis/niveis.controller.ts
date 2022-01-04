import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateNivelDTO } from './dtos/create-nivel.dto';
import { UpdateNivelDTO } from './dtos/update-nivel.dto';
import { INivel } from './interfaces/INivel.interface';
import { NiveisService } from './niveis.service';

@Controller('niveis')
export class NiveisController {
  constructor(private readonly niveisService: NiveisService) {}

  @Get()
  async get(): Promise<INivel[]> {
    return await this.niveisService.findAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<INivel> {
    return await this.niveisService.findOne(id);
  }

  @Post()
  async create(@Body() data: CreateNivelDTO): Promise<INivel> {
    return await this.niveisService.create(data);
  }

  @Put(':id')
  async put(
    @Param('id') id: string,
    @Body() data: UpdateNivelDTO,
  ): Promise<INivel> {
    return await this.niveisService.put(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    return await this.niveisService.remove(id);
  }
}
