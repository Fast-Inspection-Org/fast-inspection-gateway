import { ApiProperty } from '@nestjs/swagger';
import { CampoSerializable } from 'src/configs/campo/serializable/campo.serializable';
import {
  HerramientaSerializable,
  HerramientaSerializableWithAllProperties,
} from 'src/configs/herramientas/serializable/herramienta.serializable';

export class HerramientaAnalisisCriticidadSerializable extends HerramientaSerializable {}

export class HerramientaAnalisisCriticidadSerializableWithAllProperties extends HerramientaSerializableWithAllProperties {
  @ApiProperty({
    description: 'Representa los campos definidos en la Herramienta',
    type: CampoSerializable,
    isArray: true,
    required: true,
  })
  campos: Promise<Array<CampoSerializable>>;
}
