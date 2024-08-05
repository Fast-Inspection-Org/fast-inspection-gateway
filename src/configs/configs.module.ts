import { Module } from '@nestjs/common';
import { ConfigsController } from './configs.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { NameConfigsService } from 'src/utils/global';
import { envs } from 'src/utils/envs';
import { CampoController } from './campo/campo.controller';
import { CampoDefinidoController } from './campo-definido/campo-definido.controller';
import { CampoDefinidoImagenController } from './campo-definido-imagen/campo-definido-imagen.controller';
import { CampoDefinidoNumericoController } from './campo-definido-numerico/campo-definido-numerico.controller';
import { CampoDefinidoSeleccionController } from './campo-definido-seleccion/campo-definido-seleccion.controller';
import { CampoDefinidoTextoController } from './campo-definido-texto/campo-definido-texto.controller';
import { CausaController } from './causa/causa.controller';
import { HerramientaAnalisisCriticidadController } from './herramienta-analisis-criticidad/herramienta-analisis-criticidad.controller';
import { HerramientasController } from './herramientas/herramientas.controller';
import { IndicadorController } from './indicador/indicador.controller';
import { IndicadorIntervaloController } from './indicador-intervalo/indicador-intervalo.controller';
import { IndicadorSinIntervaloController } from './indicador-sin-intervalo/indicador-sin-intervalo.controller';
import { IndiceCalculableController } from './indice-calculable/indice-calculable.controller';
import { IndiceCalculableIntervaloController } from './indice-calculable-intervalo/indice-calculable-intervalo.controller';
import { IndiceCalculableSinIntervaloController } from './indice-calculable-sin-intervalo/indice-calculable-sin-intervalo.controller';
import { MaterialesConfigController } from './materiales-config/materiales-config.controller';
import { SistemasConfigController } from './sistemas-config/sistemas-config.controller';
import { SubsistemasConfigController } from './subsistemas-config/subsistemas-config.controller';
import { TipoDeterioroAnalisisCriticidadConfigController } from './tipo-deterioro-analisis-criticidad-config/tipo-deterioro-analisis-criticidad-config.controller';
import { TipoDeteriorosConfigController } from './tipo-deterioros-config/tipo-deterioros-config.controller';


@Module({
  controllers: [ConfigsController, CampoController, CampoDefinidoController, CampoDefinidoImagenController, CampoDefinidoNumericoController, CampoDefinidoSeleccionController,
    CampoDefinidoTextoController, CausaController, HerramientaAnalisisCriticidadController, HerramientasController, IndicadorController, IndicadorIntervaloController,
    IndicadorSinIntervaloController, IndiceCalculableController, IndiceCalculableIntervaloController, IndiceCalculableSinIntervaloController, MaterialesConfigController,
    SistemasConfigController, SubsistemasConfigController, TipoDeterioroAnalisisCriticidadConfigController, TipoDeteriorosConfigController],
  providers: [],
  imports: [
    ClientsModule.register([
      {
        name: NameConfigsService,
        transport: Transport.TCP,
        options: {
          host: envs.CONFIGS_SERVICE_HOST,
          port: parseInt(envs.CONFIGS_SERVICE_PORT)
        }
      }
    ])
  ]
})
export class ConfigsModule { }
