import { Type } from '@nestjs/common';
import { ApiProperty, ApiResponseOptions } from '@nestjs/swagger';
import { ConfigSerializable } from 'src/configs/serializable/config.serializable';

interface ApiResponses {
  401: ApiResponseOptions;
  400: ApiResponseOptions;
}

export const apiResponses: ApiResponses = {
  401: {
    status: 401,
    description: 'No autorizado. Se requiere autenticación con token válido.',
  },
  400: {
    status: 400,
    description:
      'Solicitud inválida. Verifique que todos los campos requeridos estén presentes y en el formato correcto.',
  },
} as const;

/*
export class ApiPaginatedResponse<T> {
  @ApiProperty({
    description:
      'Representa los datos obtenidos como resultado de la de solicitud',
    type: ConfigSerializable,
    isArray: true,
    required: true,
  })
  data: ConfigSerializable;
}
  */



export class PaginatedResponse<T> {
  @ApiProperty({
    description: 'Array de items paginados',
    isArray: true,
  })
  data: T[];

}

export class PaginationMeta {
  @ApiProperty({ example: 100 })
  totalItems: number;
  
  @ApiProperty({ example: 10 })
  totalPages: number;
  
  @ApiProperty({ example: 1 })
  currentPage: number;
  
  @ApiProperty({ example: 10 })
  itemsPerPage: number;
}

export function ApiPaginatedResponse<T>(
  classRef: Type<T>,
  dataDescription: string,
): any {
  // Creamos una clase dinámica para evitar problemas de caché
  class DynamicPaginatedResponse extends PaginatedResponse<T> {
    @ApiProperty({
      description: dataDescription,
      type: classRef,
      isArray: true,
    })
    data: T[];
  }

  // Forzamos el nombre único para cada clase
  Object.defineProperty(DynamicPaginatedResponse, 'name', {
    value: `Paginated${classRef.name}Response`,
  });

  return DynamicPaginatedResponse as Type<PaginatedResponse<T>>;
}
