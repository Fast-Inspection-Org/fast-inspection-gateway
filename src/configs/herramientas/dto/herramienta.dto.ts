import { ApiProperty } from '@nestjs/swagger';
import { CampoDTO } from 'src/configs/campo/dto/campo.dto';

export class HerramientaDTO {
  @ApiProperty({
    description: 'Representa el nombre de la herramienta',
    example: 'Herramienta de Análisis de Criticidad',
    type: 'texto',
    required: true,
  })
  nombre: string;
  tipo: string;
  @ApiProperty({
    description:
      'Representa la configuración a la cual pertenece dicha herramienta',
    example: '{"version": 1}',
    type: 'json',
    required: true,
  })
  config: { version: number }; // atributo que representa la configuracion a la que pertenece la herramienta
}
