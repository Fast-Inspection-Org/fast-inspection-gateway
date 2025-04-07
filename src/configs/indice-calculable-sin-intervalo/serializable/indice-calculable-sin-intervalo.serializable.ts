import { ApiProperty } from '@nestjs/swagger';
import { IndicadorSinIntervaloSerializable } from 'src/configs/indicador-sin-intervalo/serializable/indicador-sin-intervalo.serializable';
import { indicadoresSinIntervalosExample } from 'src/configs/indice-calculable/dto/examples-dto';
import { IndiceCalculableSerializable } from 'src/configs/indice-calculable/serializable/indice-calculable.serializable';

export class IndiceCalculableSinIntervaloSerializable extends IndiceCalculableSerializable {
  @ApiProperty({
    description:
      'Representa los indicadores sin intervalo del indice calculable (solo índice calculable sin intervalos)',
    example: indicadoresSinIntervalosExample,
    type: 'json',
    required: true,
  })
  indicadoresSinIntervalos?: Array<IndicadorSinIntervaloSerializable>; // Atributo que define los indicadores sin intervalos del indice calculable sin intervalos
}
