import { ApiProperty } from '@nestjs/swagger';
import { IndicadorDTO } from 'src/configs/indicador/dto/indicador.dto';
import { indicadoresIntervalosExample } from 'src/configs/indice-calculable/dto/examples-dto';
import { Calculos } from 'src/utils/interfaces-and-enums';

export class UpdateIndiceCalculableIntervaloDTO {
  @ApiProperty({
    description: 'Representa el nombre del indice calculable',
    example: 'Índice para el cálculo de la criticidad',
    type: 'texto',
    required: true,
  })
  nombre: String;
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
      'Representa los indicadores con intervalo del indice calculable (solo índice calculable por intervalos)',
    example: indicadoresIntervalosExample,
    type: 'json',
    required: true,
  })
  indicadoresIntervalos: Array<IndicadorDTO>;
}
