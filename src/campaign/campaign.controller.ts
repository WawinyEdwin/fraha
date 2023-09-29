import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('campaign')
@Controller('campaign')
export class CampaignController {}
