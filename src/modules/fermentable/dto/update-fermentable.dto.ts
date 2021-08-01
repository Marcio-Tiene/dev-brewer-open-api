import { PartialType } from '@nestjs/swagger';
import { Fermentable } from '../fermentable.schema';

export class UpdateFermentableDto extends PartialType(Fermentable) {}
