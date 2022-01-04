import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DesenvolvedoresController } from './desenvolvedores.controller';
import { DesenvolvedoresService } from './desenvolvedores.service';
import { Desenvolvedor } from './entities/desenvolvedor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Desenvolvedor])],
  controllers: [DesenvolvedoresController],
  providers: [DesenvolvedoresService],
})
export class DesenvolvedoresModule {}
