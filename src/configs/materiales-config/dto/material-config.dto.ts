import { ApiProperty } from '@nestjs/swagger';
import { SubsistemaConfigDTO } from 'src/configs/subsistemas-config/dto/subsistema-config.dto';
import { TipoDeterioroConfigDTO } from 'src/configs/tipo-deterioros-config/dto/tipo-deterioro-config.dto';

export class MaterialConfigDTO {
  id: number; // Atributo unico
  @ApiProperty({
    description: 'Representa el nombre del material de configuración',
    example: 'Acero',
    type: 'texto',
    required: true,
  })
  nombre: String;
  tiposDeteriorosConfig?: Array<TipoDeterioroConfigDTO>; // Un material tiene muchos tipos de deterioros asociados
  @ApiProperty({
    description: 'Representa el Subsistema al que pertenecerá dicho material',
    example: '{"id": 1}',
    type: 'json',
    required: true,
  })
  subsistemaConfig: SubsistemaConfigDTO;
}
