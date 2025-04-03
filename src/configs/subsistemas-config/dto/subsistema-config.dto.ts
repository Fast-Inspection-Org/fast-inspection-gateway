import { ApiProperty } from '@nestjs/swagger';
import { MaterialConfigDTO } from 'src/configs/materiales-config/dto/material-config.dto';
import { SistemaConfigDTO } from 'src/configs/sistemas-config/dto/sistema-config.dto';

export class SubsistemaConfigDTO {
  id: number;
  @ApiProperty({
    description: 'Representa el nombre del subsistema de configuración',
    example: 'Columna',
    type: 'texto',
    required: true,
  })
  nombre: String;
  materialesConfig?: Array<MaterialConfigDTO>;
  @ApiProperty({
    description: 'Representa el Sistema al que pertenecerá dicho subsistema',
    example: '{"id": 1}',
    type: 'json',
    required: true,
  })
  sistemaConfig: SistemaConfigDTO;
}
