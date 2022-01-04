import { AppError } from '../../../common/errors/AppError';

export namespace DesenvolvedoresError {
  export class DesenvolvedorAlreadyExists extends AppError {
    constructor() {
      super('Desenvolvedor already exists', 400);
    }
  }

  export class DesenvolvedorNotExists extends AppError {
    constructor() {
      super('Desenvolvedor not exists', 404);
    }
  }
}
