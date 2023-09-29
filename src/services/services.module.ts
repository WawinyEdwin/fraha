import { Module } from '@nestjs/common';
import { ServicesController } from './services.controller';
import { ServicesService } from './services.service';
import { SupabaseModule } from 'src/supabase/supabase.module';
import { ServicesRepository } from './services.repository';

@Module({
  imports: [SupabaseModule],
  controllers: [ServicesController],
  providers: [ServicesService, ServicesRepository],
})
export class ServicesModule {}
