import { HttpException, Injectable } from '@nestjs/common';
import { SupabaseClient } from '@supabase/supabase-js';
import { SupabaseService } from 'src/supabase/supabase.service';
import { CustomerInfo } from './customer.types';

@Injectable()
export class CustomerRepository {
  private _supabase: SupabaseClient;
  constructor(private readonly _supabaseClientFactory: SupabaseService) {
    this._supabase = this._supabaseClientFactory.createClient();
  }

  async saveCustomer(customerInfo: CustomerInfo): Promise<any> {
    const { data, error } = await this._supabase
      .from('customers')
      .insert([{ ...customerInfo }])
      .select();
    if (error) {
      throw error;
    }
    return data[0];
  }

  async updateCustomer(
    customerId: string,
    customerInfo: Partial<CustomerInfo>,
  ): Promise<any> {
    const { data, error } = await this._supabase
      .from('customers')
      .update({ ...customerInfo })
      .eq('id', customerId)
      .select();
    if (error) {
      throw error;
    }
    return data[0];
  }

  async findCustomerById(customerId: string): Promise<any> {
    const { data, error } = await this._supabase
      .from('customers')
      .select('*')
      .eq('id', customerId);
    if (error) {
      throw error;
    }
    return data[0];
  }

  async findCustomerBySalonId(salonId: string): Promise<any> {
    const { data, error } = await this._supabase
      .from('customers')
      .select('*')
      .eq('salon', salonId);
    if (error) {
      throw error;
    }
    return data;
  }

  async deleteCustomer(ustomerId: string): Promise<any> {}
}
