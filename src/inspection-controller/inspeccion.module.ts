import { Module } from '@nestjs/common';
import { InspeccionController } from './inspeccion.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { NameInspectionController } from 'src/utils/global';
import { envs } from 'src/utils/envs';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: NameInspectionController,
        transport: Transport.TCP,
        options: {
          host: envs.INSPECTION_CONTROLLER_HOST,
          port: parseInt(envs.INSPECTION_CONTROLLER_PORT),
        },
      },
    ]),
  ],
  controllers: [InspeccionController],
  providers: [],
})
export class InspeccionModule {}
