import { Injectable } from '@nestjs/common';
import { BookingRepository } from './booking.repository';
import { IBookingInfo } from './booking.types';

@Injectable()
export class BookingService {
  constructor(private readonly _bookingRepo: BookingRepository) {}

  async getBooking(bookingId: string): Promise<any> {
    return await this._bookingRepo.findBookingById(bookingId);
  }

  async getSalonBooking(salonId: string): Promise<any> {
    return await this._bookingRepo.findBookingBySalonId(salonId);
  }

  async getCustomerBooking(phoneNumber: string): Promise<any> {
    return await this._bookingRepo.findBookingByCustomerPhone(
          phoneNumber,
        );
  }

  async saveBookingInfo(BookingInfo: IBookingInfo): Promise<any> {
    return await this._bookingRepo.saveBooking(BookingInfo);
  }

  async updateBooking(
    bookingId: string,
    bookingInfo: Partial<IBookingInfo>,
  ): Promise<any> {
    return await this._bookingRepo.updateBooking(
          bookingId,
          bookingInfo,
        );
  }

  async removeBooking(bookingId: string): Promise<any> {
    return await this._bookingRepo.deleteBooking(bookingId);
  }
}
