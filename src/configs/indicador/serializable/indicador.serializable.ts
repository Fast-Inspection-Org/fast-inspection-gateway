import { ApiProperty } from '@nestjs/swagger';
import { TipoIndicador } from 'src/utils/interfaces-and-enums';

export class IndicadorSerializable {
  @ApiProperty({
    description: 'Representa el identificador único del Indicador',
    example: '1',
    type: 'numérico',
    required: true,
  })
  id: number;
  @ApiProperty({
    description: 'Representa el nombre del Indicador',
    example: 'Indicador de Intervalo Inicial',
    type: 'texto',
    required: true,
  })
  nombre: String;
  @ApiProperty({
    description: 'Representa el valor que representa dicho intervalo',
    example: '1',
    type: 'numérico',
    required: true,
  })
  valor: number;
  @ApiProperty({
    description: 'Representa el tipo de indicador que es',
    example: 'indicadorIntervalo | indicadorSinIntervalo',
    type: 'texto',
    required: true,
  })
  tipo: TipoIndicador;
}
