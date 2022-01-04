import { GenderType } from '../desenvolvedores.enum';

export class CreateDesenvolvedorDTO {
  nivel_id: string;

  nome: string;

  sexo: GenderType;

  datanascimento: Date;

  idade: number;

  hobby: string;
}
