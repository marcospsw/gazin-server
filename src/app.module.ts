import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { DesenvolvedoresModule } from './modules/desenvolvedores/desenvolvedores.module';
import { NiveisModule } from './modules/niveis/niveis.module';

@Module({
  imports: [TypeOrmModule.forRoot(), NiveisModule, DesenvolvedoresModule],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
