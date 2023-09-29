import { Injectable } from '@nestjs/common';
import { ServicesRepository } from './services.repository';
import { IService } from './services.types';

@Injectable()
export class ServicesService {
  constructor(private readonly _services: ServicesRepository) {}

  public async getServices(): Promise<IService[]> {
    return await this._services.getServices();
  }
}
