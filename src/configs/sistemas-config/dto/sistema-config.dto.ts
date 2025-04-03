import { ApiProperty } from '@nestjs/swagger';
import { ConfigDTO } from 'src/configs/dto/config.dto';
import { HerramientaDTO } from 'src/configs/herramientas/dto/herramienta.dto';
import { SubsistemaConfigDTO } from 'src/configs/subsistemas-config/dto/subsistema-config.dto';

export class SistemaConfigDTO {
  id: number;
  @ApiProperty({
    description: 'Representa el nombre del sistema de configuración',
    example: 'Estructural',
    type: 'texto',
    required: true,
  })
  nombre: String;
  subSistemasConfig?: Array<SubsistemaConfigDTO>;
  @ApiProperty({
    description:
      'Representa la Herramienta seleccionada para ser usada en este sistema',
    example: '{"id": 2}',
    type: 'json',
    required: true,
  })
  herramienta: HerramientaDTO; // atributo que define la herramienta a la cual pertenece el sistema
  @ApiProperty({
    description:
      'Representa la Configuración a la que pertenecerá dicho sistema',
    example: '{"id": 2}',
    type: 'json',
    required: true,
  })
  config: ConfigDTO; // atributo que define a la configuracion que pertenece el sistemaConfig
}
