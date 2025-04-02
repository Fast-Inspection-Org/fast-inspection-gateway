import { ApiResponseOptions } from '@nestjs/swagger';

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
