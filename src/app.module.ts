import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigsModule } from './configs/configs.module';
import { UsersAuthModule } from './users-auth/users-auth.module';
import { InspeccionModule } from './inspection-controller/inspeccion.module';
import { EdificationsControllerModule } from './edifications-controller/edifications-controller.module';


@Module({
  imports: [ConfigsModule, InspeccionModule, UsersAuthModule, EdificationsControllerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
