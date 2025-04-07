import { ApiProperty } from '@nestjs/swagger';
import { IndicadorSerializable } from 'src/configs/indicador/serializable/indicador.serializable';

export class IndicadorIntervaloSerializable extends IndicadorSerializable {
  @ApiProperty({
    description: 'Representa el limite inferior del intervalo del Indicador',
    example: '1',
    type: 'numécico',
    required: true,
  })
  limiteInferior?: number;
  @ApiProperty({
    description: 'Representa el limite superior del intervalo del Indicador',
    example: '100',
    type: 'numécico',
    required: true,
  })
  limiteSuperior?: number;
}
