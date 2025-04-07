import { ApiProperty } from '@nestjs/swagger';
import { IndicadorIntervaloSerializable } from 'src/configs/indicador-intervalo/serializable/indicador-inservalo.serializable';
import { indicadoresIntervalosExample } from 'src/configs/indice-calculable/dto/examples-dto';
import { IndiceCalculableSerializable } from 'src/configs/indice-calculable/serializable/indice-calculable.serializable';

export class IndiceCalculableIntervaloSerializable extends IndiceCalculableSerializable {
  @ApiProperty({
    description:
      'Representa los indicadores con intervalo del indice calculable (solo índice calculable por intervalos)',
    example: indicadoresIntervalosExample,
    type: 'json',
    required: true,
  })
  indicadoresIntervalos?: Array<IndicadorIntervaloSerializable>; // Un indice calculable por intervalos puede tener varios indicadores de intervalos
}
