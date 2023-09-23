import { HttpException, Injectable } from '@nestjs/common';
import { SupabaseClient } from '@supabase/supabase-js';
import { SupabaseService } from 'src/supabase/supabase.service';
import { StaffInfo } from './staff.types';

@Injectable()
export class StaffRepository {
  private _supabase: SupabaseClient;
  constructor(private readonly _supabaseClientFactory: SupabaseService) {
    this._supabase = this._supabaseClientFactory.createClient();
  }

  async saveStaff(staffInfo: StaffInfo): Promise<any> {
    const { data, error } = await this._supabase
      .from('staff')
      .insert([{ ...staffInfo }])
      .select();
    if (error) throw error;
    return data[0];
  }

  async updateStaff(
    staffId: string,
    staffInfo: Partial<StaffInfo>,
  ): Promise<any> {
    const { data, error } = await this._supabase
      .from('staff')
      .update({ ...staffInfo })
      .eq('id', staffId)
      .select();
    if (error) throw error;
    return data[0];
  }

  async findStaffById(staffId: string): Promise<any> {
    const { data, error } = await this._supabase
      .from('staff')
      .select('*')
      .eq('id', staffId);
    if (error) throw error;
    return data[0];
  }

  async findStaffBySalonId(salonId: string): Promise<any> {
    const { data, error } = await this._supabase
      .from('staff')
      .select('*')
      .eq('salon', salonId);
    if (error) throw error;
    return data;
  }

  async deleteStaff(staffId: string): Promise<any> {}
}
