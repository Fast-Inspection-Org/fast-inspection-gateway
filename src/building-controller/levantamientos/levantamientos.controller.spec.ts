import { Test, TestingModule } from '@nestjs/testing';
import { LevantamientosController } from './levantamientos.controller';

describe('LevantamientosController', () => {
  let controller: LevantamientosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LevantamientosController],
    }).compile();

    controller = module.get<LevantamientosController>(LevantamientosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
