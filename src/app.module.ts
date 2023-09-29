import { Module } from '@nestjs/common';
import { BookingModule } from './booking/booking.module';
import { StaffModule } from './staff/staff.module';
import { CashregisterModule } from './cashregister/cashregister.module';
import { CampaignModule } from './campaign/campaign.module';
import { CustomerModule } from './customer/customer.module';
import { SalonModule } from './salon/salon.module';
import { SupabaseModule } from './supabase/supabase.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { ServicesModule } from './services/services.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env/.env.${process.env.NODE_ENV || 'development'}`,
    }),
    SupabaseModule,
    AuthModule,
    BookingModule,
    ServicesModule,
    CustomerModule,
    StaffModule,
    CashregisterModule,
    CampaignModule,
    SalonModule,
  ],
})
export class AppModule {}
