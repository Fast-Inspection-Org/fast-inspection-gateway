import { ApiProperty } from '@nestjs/swagger';
import { IndicadorDTO } from 'src/configs/indicador/dto/indicador.dto';
import { indicadoresSinIntervalosExample } from 'src/configs/indice-calculable/dto/examples-dto';
import { Calculos } from 'src/utils/interfaces-and-enums';

export class UpdateIndiceCalculableSinIntervaloDTO {
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
      'Representa los indicadores sin intervalo del indice calculable (solo índice calculable sin intervalos)',
    example: indicadoresSinIntervalosExample,
    type: 'json',
    required: true,
  })
  indicadoresSinIntervalo: Array<IndicadorDTO>;
}
