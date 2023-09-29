import { Controller, Get } from '@nestjs/common';
import { ServicesService } from './services.service';
import { ApiTags } from '@nestjs/swagger';
import { IService } from './services.types';

@ApiTags('services')
@Controller('services')
export class ServicesController {
  constructor(private readonly _service: ServicesService) {}

  @Get('')
  public async getServices(): Promise<IService[]> {
    const response = await this._service.getServices();
    return response;
  }
}
