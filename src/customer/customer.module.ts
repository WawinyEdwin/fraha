import { Module } from '@nestjs/common';
import { CustomerController } from './customer.controller';
import { CustomerService } from './customer.service';
import { SupabaseModule } from 'src/supabase/supabase.module';
import { CustomerRepository } from './customer.repository';

@Module({
  imports: [SupabaseModule],
  controllers: [CustomerController],
  providers: [CustomerService, CustomerRepository],
})
export class CustomerModule {}
