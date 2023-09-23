import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { BookingService } from './booking.service';

@Controller('bookings')
export class BookingController {
  constructor(private readonly _bookingService: BookingService) {}

  @Get(':bookingId')
  async handleGetBooking(@Param('bookingId') bookingId: string): Promise<any> {
    const response = await this._bookingService.getBooking(bookingId);
    return response;
  }

  @Get('salon/:salonId')
  async handleSalonBooking(@Param('salonId') salonId: string): Promise<any> {
    const response = await this._bookingService.getSalonBooking(salonId);
    return response;
  }

  @Get('customers')
  async handleCustomerBooking(@Query('phone') phone: string): Promise<any> {
    const response = await this._bookingService.getCustomerBooking(phone);
    return response;
  }
  @Post('')
  async handleSaveBookingInfo(@Body() body: any): Promise<any> {
    const response = await this._bookingService.saveBookingInfo(body);
    return response;
  }

  @Patch(':bookingId')
  async handleUpdateBooking(
    @Param('bookingId') bookingId: string,
    @Body() body: any,
  ): Promise<any> {
    const response = await this._bookingService.updateBooking(bookingId, body);
    return response;
  }

  @Delete(':bookingId')
  async handleDeleteBooking(
    @Param('bookingId') bookingId: string,
  ): Promise<any> {
    const response = await this._bookingService.removeBooking(bookingId);
    return response;
  }
}
