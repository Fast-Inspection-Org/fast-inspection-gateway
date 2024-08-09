import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigsModule } from './configs/configs.module';

import { BuildingControllerModule } from './building-controller/building-controller.module';
import { UsersAuthModule } from './users-auth/users-auth.module';



@Module({
  imports: [ConfigsModule, BuildingControllerModule, UsersAuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
