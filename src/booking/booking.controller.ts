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
import { ApiTags } from '@nestjs/swagger';

@ApiTags('bookings')
@Controller('bookings')
export class BookingController {
  constructor(private readonly _bookingService: BookingService) {}

  @Get(':bookingId')
  async handleGetBooking(@Param('bookingId') bookingId: string): Promise<any> {
    return await this._bookingService.getBooking(bookingId);
  }

  @Get('salon/:salonId')
  async handleSalonBooking(@Param('salonId') salonId: string): Promise<any> {
    return await this._bookingService.getSalonBooking(salonId);
  }

  @Get('customers')
  async handleCustomerBooking(@Query('phone') phone: string): Promise<any> {
    return await this._bookingService.getCustomerBooking(phone);
  }
  @Post('')
  async handleSaveBookingInfo(@Body() body: any): Promise<any> {
    return await this._bookingService.saveBookingInfo(body);
  }

  @Patch(':bookingId')
  async handleUpdateBooking(
    @Param('bookingId') bookingId: string,
    @Body() body: any,
  ): Promise<any> {
    return await this._bookingService.updateBooking(bookingId, body);
  }

  @Delete(':bookingId')
  async handleDeleteBooking(
    @Param('bookingId') bookingId: string,
  ): Promise<any> {
    return await this._bookingService.removeBooking(bookingId);
  }
}
