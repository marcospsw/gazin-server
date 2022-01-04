import { Desenvolvedor } from 'src/modules/desenvolvedores/entities/desenvolvedor.entity';

export interface INivel {
  id: string;
  nivel: string;
  desenvolvedores: Desenvolvedor[];
  created_at: Date;
  updated_at: Date;
}
