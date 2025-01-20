import { Test, TestingModule } from '@nestjs/testing';
import { EdificationsControllerController } from './edifications-controller.controller';
import { EdificationsControllerService } from './edifications-controller.service';

describe('EdificationsControllerController', () => {
  let controller: EdificationsControllerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EdificationsControllerController],
      providers: [EdificationsControllerService],
    }).compile();

    controller = module.get<EdificationsControllerController>(EdificationsControllerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
