import { ApiProperty } from '@nestjs/swagger';
import { ConfigDTO } from 'src/configs/dto/config.dto';
import { IndicadorDTO } from 'src/configs/indicador/dto/indicador.dto';
import { Calculos } from 'src/utils/interfaces-and-enums';
import {
  indicadoresIntervalosExample,
  indicadoresSinIntervalosExample,
} from './examples-dto';

export class IndiceCalculableDTO {
  id: number;
  @ApiProperty({
    description: 'Representa el nombre del indice calculable',
    example: 'Índice para el cálculo de la criticidad',
    type: 'texto',
    required: true,
  })
  nombre: String;
  @ApiProperty({
    description:
      'Representa los indicadores con intervalo del indice calculable (solo índice calculable por intervalos)',
    example: indicadoresIntervalosExample,
    type: 'json',
    required: true,
  })
  indicadoresIntervalos?: Array<IndicadorDTO>; // Un indice calculable por intervalos puede tener varios indicadores de intervalos
  @ApiProperty({
    description:
      'Representa los indicadores sin intervalo del indice calculable (solo índice calculable sin intervalos)',
    example: indicadoresSinIntervalosExample,
    type: 'json',
    required: true,
  })
  indicadoresSinIntervalos?: Array<IndicadorDTO>; // Atributo que define los indicadores sin intervalos del indice calculable sin intervalos
  tipo: string;
  @ApiProperty({
    description:
      'Representa en que cálculo debe de ser usado dicho índice calculable',
    example: 'Detectabilidad | Impacto | Frecuencia | Criticidad',
    type: 'texto',
    required: true,
  })
  calculo: Calculos;
  @ApiProperty({
    description:
      'Representa la configuración al que pertenece dicho índice calculable',
    example: '{"version": 1}',
    type: 'json',
    required: true,
  })
  config: ConfigDTO; // Atributo que representa la configuracion donde esta definido los indices calculables
}
