import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { SupabaseModule } from 'src/supabase/supabase.module';
import { AuthRepository } from './auth.repository';

@Module({
  imports: [SupabaseModule],
  providers: [AuthService, AuthRepository],
  controllers: [AuthController],
})
export class AuthModule {}
