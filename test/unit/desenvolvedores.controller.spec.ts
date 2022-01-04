import { Test, TestingModule } from '@nestjs/testing';
import { DesenvolvedoresController } from '../../src/modules/desenvolvedores/desenvolvedores.controller';
import { DesenvolvedoresService } from '../../src/modules/desenvolvedores/desenvolvedores.service';

describe('AppController', () => {
  let desenvolvedoresController: DesenvolvedoresController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [DesenvolvedoresController],
      providers: [DesenvolvedoresService],
    }).compile();

    desenvolvedoresController = app.get<DesenvolvedoresController>(
      DesenvolvedoresController,
    );
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(desenvolvedoresController.getHello()).toBe('Hello World!');
    });
  });
});
