import { Module } from '@nestjs/common';
import { StaffController } from './staff.controller';
import { StaffService } from './staff.service';
import { SupabaseModule } from 'src/supabase/supabase.module';
import { StaffRepository } from './staff.repository';

@Module({
  imports: [SupabaseModule],
  controllers: [StaffController],
  providers: [StaffService, StaffRepository],
})
export class StaffModule {}
