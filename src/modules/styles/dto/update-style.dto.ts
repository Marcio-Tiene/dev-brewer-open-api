import { PartialType } from '@nestjs/swagger';
import { Style } from '../style.schema';

export class UpdateStyleDto extends PartialType(Style) {}
