import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CustomerService } from './customer.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('customers')
@Controller('customers')
export class CustomerController {
  constructor(private readonly _customerService: CustomerService) {}

  @Get(':customerId')
  async handleGetcustomer(
    @Param('customerId') customerId: string,
  ): Promise<any> {
    const response = await this._customerService.getCustomer(customerId);
    return response;
  }

  @Get('salon/:salonId')
  async handleSalonCustomer(@Param('salonId') salonId: string): Promise<any> {
    const response = await this._customerService.getSalonCustomer(salonId);
    return response;
  }

  @Post('')
  async handleSaveCustomerInfo(@Body() body: any): Promise<any> {
    const response = await this._customerService.saveCustomerInfo(body);
    return response;
  }

  @Patch(':customerId')
  async handleUpdateCustomer(
    @Param('customerId') customerId: string,
    @Body() body: any,
  ): Promise<any> {
    const response = await this._customerService.updateCustomerInfo(
      customerId,
      body,
    );
    return response;
  }

  @Delete(':customerId')
  async handleDeleteCustomer(
    @Param('customerId') customerId: string,
  ): Promise<any> {
    const response = await this._customerService.removeCustomer(customerId);
    return response;
  }
}
