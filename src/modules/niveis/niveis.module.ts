import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Nivel } from './entities/nivel.entity';
import { NiveisController } from './niveis.controller';
import { NiveisService } from './niveis.service';

@Module({
  imports: [TypeOrmModule.forFeature([Nivel])],
  controllers: [NiveisController],
  providers: [NiveisService],
})
export class NiveisModule {}
