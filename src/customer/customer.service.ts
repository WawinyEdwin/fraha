import { Injectable } from '@nestjs/common';
import { CustomerRepository } from './customer.repository';
import { CustomerInfo } from './customer.types';

@Injectable()
export class CustomerService {
  constructor(private readonly _customerRepo: CustomerRepository) {}

  async getCustomer(CustomerId: string): Promise<any> {
    const response = await this._customerRepo.findCustomerById(CustomerId);
    return response;
  }

  async getSalonCustomer(salonId: string): Promise<any> {
    const response = await this._customerRepo.findCustomerBySalonId(salonId);
    return response;
  }

  async saveCustomerInfo(customerInfo: CustomerInfo): Promise<any> {
    const response = await this._customerRepo.saveCustomer(customerInfo);
    return response;
  }

  async updateCustomerInfo(
    customerId: string,
    customerInfo: Partial<CustomerInfo>
  ): Promise<any> {
    const response = await this._customerRepo.updateCustomer(
      customerId,
      customerInfo,
    );
    return response;
  }

  async removeCustomer(customerId: string): Promise<any> {
    const response = await this._customerRepo.deleteCustomer(customerId);
    return response;
  }
}
