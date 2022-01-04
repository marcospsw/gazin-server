import { Nivel } from 'src/modules/niveis/entities/nivel.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';
import { GenderType } from '../desenvolvedores.enum';

@Entity('desenvolvedores')
export class Desenvolvedor {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid')
  nivel_id: string;

  @ManyToOne(() => Nivel, (nivel) => nivel.desenvolvedores)
  @JoinColumn({ name: 'nivel_id' })
  nivel: Nivel;

  @Column('varchar', { length: 255 })
  nome: string;

  @Column({ type: 'enum', enum: GenderType })
  sexo: string;

  @Column()
  datanascimento: Date;

  @Column('integer')
  idade: number;

  @Column('varchar', { length: 255 })
  hobby: string;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
