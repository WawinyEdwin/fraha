import { Injectable } from '@nestjs/common';
import { CustomerRepository } from './customer.repository';
import { CustomerInfo } from './customer.types';

@Injectable()
export class CustomerService {
  constructor(private readonly _customerRepo: CustomerRepository) {}

  async getCustomer(CustomerId: string): Promise<any> {
    return await this._customerRepo.findCustomerById(CustomerId);
  }

  async getSalonCustomer(salonId: string): Promise<any> {
    return await this._customerRepo.findCustomerBySalonId(salonId);
  }

  async saveCustomerInfo(customerInfo: CustomerInfo): Promise<any> {
    return await this._customerRepo.saveCustomer(customerInfo);
  }

  async updateCustomerInfo(
    customerId: string,
    customerInfo: Partial<CustomerInfo>
  ): Promise<any> {
    return await this._customerRepo.updateCustomer(
          customerId,
          customerInfo,
        );
  }

  async removeCustomer(customerId: string): Promise<any> {
    return await this._customerRepo.deleteCustomer(customerId);
  }
}
