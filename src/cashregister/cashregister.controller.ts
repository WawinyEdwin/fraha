import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('cash-register')
@Controller('cashregister')
export class CashregisterController {}
