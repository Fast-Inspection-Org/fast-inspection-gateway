import { Module } from '@nestjs/common';

import { BuildingControllerController } from './building-controller.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { NameBuildingController } from 'src/utils/global';
import { envs } from 'src/utils/envs';
import { InspeccionModule } from './inspeccion/inspeccion.module';
import { DeterioroModule } from './deterioro/deterioro.module';


@Module({
  controllers: [BuildingControllerController],
  providers: [],
  imports: [
    ClientsModule.register([
      {
        name: NameBuildingController,
        transport: Transport.TCP,
        options: {
          host: envs.BUILDING_CONTROLLER_HOST,
          port: parseInt(envs.BUILDING_CONTROLLER_PORT)
        }
      }
    ]),
    InspeccionModule,
    DeterioroModule
  ]
})
export class BuildingControllerModule { }
