import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigsModule } from './configs/configs.module';
import { UsersAuthModule } from './users-auth/users-auth.module';
import { InspeccionModule } from './inspection-controller/inspeccion.module';

@Module({
  imports: [ConfigsModule, InspeccionModule, UsersAuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
