import { ApiProperty } from '@nestjs/swagger';

export class CreateEdificacionDto {
  @ApiProperty({
    description: 'Representa el nombre de la edificación',
    example: 'Hospital Frank País',
    type: 'texto',
    required: true,
  })
  nombre: string;
  @ApiProperty({
    description: 'Representa la dirección exacta de la edificación',
    example: 'Ave 51',
    type: 'texto',
    required: true,
  })
  direccion: string;
  @ApiProperty({
    description:
      'Representa la coordenada "x" en el mapa, de dicha edificación',
    example: '23.140255',
    type: 'numérico',
    required: true,
  })
  coordX: number;
  @ApiProperty({
    description:
      'Representa la coordenada "y" en el mapa, de dicha edificación',
    example: '-82.357579',
    type: 'numérico',
    required: true,
  })
  coordY: number;
}
