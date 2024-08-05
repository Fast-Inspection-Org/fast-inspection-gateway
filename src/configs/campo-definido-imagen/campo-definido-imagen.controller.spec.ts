import { Test, TestingModule } from '@nestjs/testing';
import { CampoDefinidoImagenController } from './campo-definido-imagen.controller';

describe('CampoDefinidoImagenController', () => {
  let controller: CampoDefinidoImagenController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CampoDefinidoImagenController],
    }).compile();

    controller = module.get<CampoDefinidoImagenController>(CampoDefinidoImagenController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
