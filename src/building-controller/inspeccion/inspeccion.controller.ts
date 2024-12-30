import { Controller } from '@nestjs/common';
import { InspeccionService } from './inspeccion.service';

@Controller('inspeccion')
export class InspeccionController {
  constructor(private readonly inspeccionService: InspeccionService) {}
}
