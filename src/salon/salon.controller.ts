import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('salon')
@Controller('salon')
export class SalonController {}
