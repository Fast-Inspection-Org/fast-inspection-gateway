import { ApiProperty } from '@nestjs/swagger';
import { TiposCamposDefinidos } from 'src/utils/interfaces-and-enums';

export class CampoDefinidoSerializable {
  @ApiProperty({
    description: 'Representa el identificador único del Campo Definido',
    example: '1',
    type: 'numérico',
    required: true,
  })
  id: number; // Atributo unico
  @ApiProperty({
    description: 'Representa el nombre del Campo Definido',
    example: 'Largo',
    type: 'texto',
    required: true,
  })
  nombre: String; // Atributo que define el nombre del campo por ejemplo: largo, ancho, profundidad, etc
  @ApiProperty({
    description: 'Representa el tipo de Campo Definido',
    example:
      'CampoDefinidoImagen | CampoDefinidoTexto | CampoDefinidoNumerico | CampoDefinidoSeleccion',
    type: 'texto',
    required: true,
  })
  tipo: TiposCamposDefinidos; //Atributo que define el tipo de campo por ejemplo: texto, numero, fecha etc, esto Sería un Enum
  // atributos del tipo numerico
  @ApiProperty({
    description:
      'Representa el inicio del intervalo admisible (solo campo definido de tipo numérico)',
    example: '1',
    type: 'numérico',
    required: true,
  })
  inicioIntervalo?: number;
  @ApiProperty({
    description:
      'Representa el final del intervalo admisible (solo campo definido de tipo numérico)',
    example: '100',
    type: 'numérico',
    required: true,
  })
  finalIntervalo?: number;
  @ApiProperty({
    description:
      'Representa la unidad de medida definida para el campo definido (solo campo definido de tipo numérico)',
    example: 'cm',
    type: 'numérico',
    required: true,
  })
  unidadMedida?: string; // representa la unidad de medida del campo númerico (en caso de que este tenga)
  // atributos del tipo selección
  @ApiProperty({
    description:
      'Representa las opciones definidas para el campo definido (solo campo definido de tipo selección)',
    example: '["Seleccionable 1", "Seleccionable 2"]',
    type: 'json',
    required: true,
  })
  opciones?: Array<string>; // las opciones de selección
}
