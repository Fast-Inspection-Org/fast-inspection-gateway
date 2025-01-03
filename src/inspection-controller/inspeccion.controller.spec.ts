import { Test, TestingModule } from '@nestjs/testing';
import { InspeccionController } from './inspeccion.controller';



describe('InspeccionController', () => {
  let controller: InspeccionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InspeccionController],
      providers: [],
    }).compile();

    controller = module.get<InspeccionController>(InspeccionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
