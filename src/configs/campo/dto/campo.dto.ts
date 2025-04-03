import { ApiProperty } from '@nestjs/swagger';
import { HerramientaDTO } from 'src/configs/herramientas/dto/herramienta.dto';

export class CampoDTO {
  id: number;
  @ApiProperty({
    description: 'Representa el nombre del campo afectado',
    example: 'Salud',
    type: 'texto',
    required: true,
  })
  nombre: String;
  @ApiProperty({
    description:
      'Representa el nivel de importancia de dicho campo afectado, el cual es un atributo que define que tan importante es este campo para una edificación',
    example: '1',
    type: 'numérico',
    required: true,
  })
  nivelImportancia: number;
  @ApiProperty({
    description:
      'Representa la versión de la configuración a la cual pertenece dicho campo',
    example: '1',
    type: 'numérico',
    required: true,
  })
  configVersion: number; // indica la version a la que pertence el campo
  @ApiProperty({
    description: 'Representa la herramienta a la cual pertenece dicho campo',
    example: '{"id": 1}',
    type: 'json',
    required: true,
  })
  herramientaAnalisisCriticidad?: HerramientaDTO; // Atributo que define a la herramienta analisis de criticidad que pertenece el campo
}
