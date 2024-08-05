import { Test, TestingModule } from '@nestjs/testing';
import { DeteriorosController } from './deterioros.controller';

describe('DeteriorosController', () => {
  let controller: DeteriorosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DeteriorosController],
    }).compile();

    controller = module.get<DeteriorosController>(DeteriorosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
