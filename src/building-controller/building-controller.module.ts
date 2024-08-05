import { Module } from '@nestjs/common';

import { BuildingControllerController } from './building-controller.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { NameBuildingController } from 'src/utils/global';
import { envs } from 'src/utils/envs';
import { LevantamientosController } from './levantamientos/levantamientos.controller';
import { DeteriorosController } from './deterioros/deterioros.controller';

@Module({
  controllers: [BuildingControllerController, LevantamientosController, DeteriorosController],
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
    ])
  ]
})
export class BuildingControllerModule { }
