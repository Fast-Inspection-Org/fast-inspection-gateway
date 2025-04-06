import { ApiProperty } from '@nestjs/swagger';

export class CausaSerializable {
  @ApiProperty({
    description: 'Representa el identificador único de la Causa',
    example: '1',
    type: 'numérico',
    required: true,
  })
  id: number; // Atributo unico
  @ApiProperty({
    description: 'Representa el nombre de la Causa',
    example: 'Corrosión',
    type: 'texto',
    required: true,
  })
  nombre: string; // Atributo que define el nombre de la causa
}
