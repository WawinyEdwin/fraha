import { Injectable } from '@nestjs/common';
import { BookingRepository } from './booking.repository';
import { IBookingInfo } from './booking.types';

@Injectable()
export class BookingService {
  constructor(private readonly _bookingRepo: BookingRepository) {}

  async getBooking(bookingId: string): Promise<any> {
    const response = await this._bookingRepo.findBookingById(bookingId);
    return response;
  }

  async getSalonBooking(salonId: string): Promise<any> {
    const response = await this._bookingRepo.findBookingBySalonId(salonId);
    return response;
  }

  async getCustomerBooking(phoneNumber: string): Promise<any> {
    const response = await this._bookingRepo.findBookingByCustomerPhone(
      phoneNumber,
    );
    return response;
  }

  async saveBookingInfo(BookingInfo: IBookingInfo): Promise<any> {
    const response = await this._bookingRepo.saveBooking(BookingInfo);
    return response;
  }

  async updateBooking(
    bookingId: string,
    bookingInfo: Partial<IBookingInfo>,
  ): Promise<any> {
    const response = await this._bookingRepo.updateBooking(
      bookingId,
      bookingInfo,
    );
    return response;
  }

  async removeBooking(bookingId: string): Promise<any> {
    const response = await this._bookingRepo.deleteBooking(bookingId);
    return response;
  }
}
