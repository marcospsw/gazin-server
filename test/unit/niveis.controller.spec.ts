import { Test, TestingModule } from '@nestjs/testing';
import { NiveisController } from '../../src/modules/niveis/niveis.controller';
import { NiveisService } from '../../src/modules/niveis/niveis.service';

describe('AppController', () => {
  let niveisController: NiveisController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [NiveisController],
      providers: [NiveisService],
    }).compile();

    niveisController = app.get<NiveisController>(NiveisController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(niveisController.getHello()).toBe('Hello World!');
    });
  });
});
