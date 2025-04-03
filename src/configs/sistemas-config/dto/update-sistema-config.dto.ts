import { ApiProperty } from '@nestjs/swagger';
import { HerramientaDTO } from 'src/configs/herramientas/dto/herramienta.dto';

export class UpdateSistemaConfigDTO {
  @ApiProperty({
    description: 'Representa el nombre del sistema de configuración',
    example: 'Estructural',
    type: 'texto',
    required: true,
  })
  nombre: String;
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
      'Representa la versión de la configuración a la cual pertenece dicho sistema',
    example: '1',
    type: 'numérico',
    required: true,
  })
  configVersion: number; // atributo de vital importancia para saber que sistema actualizar
}
