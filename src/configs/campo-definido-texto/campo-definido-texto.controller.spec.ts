import { Test, TestingModule } from '@nestjs/testing';
import { CampoDefinidoTextoController } from './campo-definido-texto.controller';

describe('CampoDefinidoTextoController', () => {
  let controller: CampoDefinidoTextoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CampoDefinidoTextoController],
    }).compile();

    controller = module.get<CampoDefinidoTextoController>(CampoDefinidoTextoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
