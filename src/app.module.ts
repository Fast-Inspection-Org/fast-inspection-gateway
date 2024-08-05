import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigsModule } from './configs/configs.module';

import { BuildingControllerModule } from './building-controller/building-controller.module';



@Module({
  imports: [ConfigsModule, BuildingControllerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
