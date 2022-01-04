import { Nivel } from 'src/modules/niveis/entities/nivel.entity';

export interface IDesenvolvedor {
  id: string;

  nivel_id: string;

  nivel: Nivel;

  nome: string;

  sexo: string;

  datanascimento: Date;

  idade: number;

  hobby: string;

  created_at: Date;

  updated_at: Date;
}
