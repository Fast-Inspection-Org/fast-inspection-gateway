import { Module } from '@nestjs/common';
import { EdificationsControllerController } from './edifications-controller.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { NameEdificationsController } from 'src/utils/global';
import { envs } from 'src/utils/envs';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: NameEdificationsController,
        transport: Transport.TCP,
        options: {
          host: envs.EDIFICATIONS_CONTROLLER_HOST,
          port: parseInt(envs.EDIFICATIONS_CONTROLLER_PORT),
        },
      },
    ]),
  ],
  controllers: [EdificationsControllerController],
  providers: [],
})
export class EdificationsControllerModule {}
