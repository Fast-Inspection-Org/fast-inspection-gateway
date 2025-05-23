import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { HerramientaDTO } from '../herramientas/dto/herramienta.dto';
import { IndiceCalculableDTO } from '../indice-calculable/dto/indice-calculable.dto';
import { SistemaConfigDTO } from '../sistemas-config/dto/sistema-config.dto';
import {
  herramientasExample,
  indicesCalculablesExample,
  sistemasConfigExample,
} from './examples-dto';

export class ConfigDTO {
  @ApiPropertyOptional({
    description: 'Representa la versión de la configuración',
    example: '1',
    type: 'númerico',
    required: false,
  })
  version?: number;
  @ApiProperty({
    description: 'Representa el nombre de la configuración',
    example: 'Herramientas de la Confiabilidad Operacional',
    type: 'texto',
    required: true,
  })
  nombre: string;
  @ApiProperty({
    description: 'Representa la descripción de la configuración',
    example:
      'Configuración de Herramientas de la Confiabilidad Operacional para empezar con el proceso de análisis de datos',
    type: 'texto',
    required: true,
  })
  descripcion: string;
  @ApiPropertyOptional({
    description: 'Representa las herramientas de la configuración',
    example: herramientasExample,
    type: 'json',
    required: false,
  })
  herramientas?: Array<HerramientaDTO>; // Una configuracion puede tener muchas herramientas registradas
  @ApiPropertyOptional({
    description: 'Representa los Índices Calculables de la configuración',
    example: indicesCalculablesExample,
    type: 'json',
    required: false,
  })
  indicesCalculables?: Array<IndiceCalculableDTO>; // Atributo que representa los indices calculables definidos en la configuracion
  @ApiPropertyOptional({
    description: 'Representa los Sistemas de la configuración',
    example: sistemasConfigExample,
    type: 'json',
    required: false,
  })
  sistemasConfigs?: Array<SistemaConfigDTO>; // Una configuracion tiene muchos sistemas definidos
}
