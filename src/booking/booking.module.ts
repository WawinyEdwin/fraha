import { Module } from '@nestjs/common';
import { BookingController } from './booking.controller';
import { BookingService } from './booking.service';
import { BookingRepository } from './booking.repository';
import { SupabaseModule } from 'src/supabase/supabase.module';

@Module({
  imports:[SupabaseModule],
  controllers: [BookingController],
  providers: [BookingService, BookingRepository]
})
export class BookingModule {}
