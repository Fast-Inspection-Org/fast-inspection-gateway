import { Test, TestingModule } from '@nestjs/testing';
import { BuildingControllerService } from './building-controller.service';

describe('BuildingControllerService', () => {
  let service: BuildingControllerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BuildingControllerService],
    }).compile();

    service = module.get<BuildingControllerService>(BuildingControllerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
