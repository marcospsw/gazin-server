import { AppError } from '../../../common/errors/AppError';

export namespace NiveisError {
  export class NivelAlreadyExists extends AppError {
    constructor() {
      super('Nivel already exists', 422);
    }
  }

  export class NivelNotExists extends AppError {
    constructor() {
      super('Nivel not exists', 404);
    }
  }
}
