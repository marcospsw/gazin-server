import { Desenvolvedor } from 'src/modules/desenvolvedores/entities/desenvolvedor.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  CreateDateColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('niveis')
export class Nivel {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nivel: string;

  @OneToMany(() => Desenvolvedor, (desenvolvedor) => desenvolvedor.nivel)
  desenvolvedores: Desenvolvedor[];

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
