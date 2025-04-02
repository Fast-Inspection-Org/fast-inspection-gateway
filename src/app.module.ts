import { Module } from '@nestjs/common';
import { ConfigsModule } from './configs/configs.module';
import { UsersAuthModule } from './users-auth/users-auth.module';
import { InspeccionModule } from './inspection-controller/inspeccion.module';
import { EdificationsControllerModule } from './edifications-controller/edifications-controller.module';

@Module({
  imports: [
    ConfigsModule,
    InspeccionModule,
    UsersAuthModule,
    EdificationsControllerModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
