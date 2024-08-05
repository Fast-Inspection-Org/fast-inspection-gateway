import { Test, TestingModule } from '@nestjs/testing';
import { CampoDefinidoSeleccionController } from './campo-definido-seleccion.controller';

describe('CampoDefinidoSeleccionController', () => {
  let controller: CampoDefinidoSeleccionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CampoDefinidoSeleccionController],
    }).compile();

    controller = module.get<CampoDefinidoSeleccionController>(CampoDefinidoSeleccionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
