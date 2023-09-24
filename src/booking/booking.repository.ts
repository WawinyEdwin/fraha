import { HttpException, Injectable } from '@nestjs/common';
import { SupabaseClient } from '@supabase/supabase-js';
import { SupabaseService } from 'src/supabase/supabase.service';
import { IBookingInfo } from './booking.types';

@Injectable()
export class BookingRepository {
  private _supabase: SupabaseClient;
  constructor(private readonly _supabaseClientFactory: SupabaseService) {
    this._supabase = this._supabaseClientFactory.createClient();
  }

  async saveBooking(bookingInfo: IBookingInfo): Promise<any> {
    const { data, error } = await this._supabase
      .from('bookings')
      .insert([{ ...bookingInfo }])
      .select();
    if (error) throw error;
    return data[0];
  }

  async updateBooking(
    bookingId: string,
    bookingInfo: Partial<IBookingInfo>,
  ): Promise<any> {
    const { data, error } = await this._supabase
      .from('bookings')
      .update({ ...bookingInfo })
      .eq('id', bookingId)
      .select();
    if (error) throw error;
    return data[0];
  }

  async findBookingById(bookingId: string): Promise<any> {
    const { data, error } = await this._supabase
      .from('bookings')
      .select('*')
      .eq('id', bookingId);
    if (error) throw error;
    return data[0];
  }

  async findBookingBySalonId(salonId: string): Promise<any> {
    const { data, error } = await this._supabase
      .from('bookings')
      .select('*')
      .eq('salon', salonId);
    if (error) throw error;
    return data;
  }

  async findBookingByCustomerPhone(phoneNumber: string): Promise<any> {
    const { data, error } = await this._supabase
      .from('bookings')
      .select('*')
      .eq('phone_number', phoneNumber);
    if (error) throw error;
    return data;
  }

  async deleteBooking(bookingId: string): Promise<any> {}
}
