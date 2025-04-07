import { ApiProperty } from "@nestjs/swagger";
import { Calculos } from "src/utils/interfaces-and-enums";

export class IndiceCalculableSerializable {
    id: number;
      @ApiProperty({
        description: 'Representa el nombre del indice calculable',
        example: 'Índice para el cálculo de la criticidad',
        type: 'texto',
        required: true,
      })
      nombre: String;
      tipo: string;
      @ApiProperty({
        description:
          'Representa en que cálculo debe de ser usado dicho índice calculable',
        example: 'Detectabilidad | Impacto | Frecuencia | Criticidad',
        type: 'texto',
        required: true,
      })
      calculo: Calculos;
}