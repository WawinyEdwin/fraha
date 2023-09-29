import { BadRequestException, Injectable } from '@nestjs/common';
import { SupabaseClient } from '@supabase/supabase-js';
import { SupabaseService } from 'src/supabase/supabase.service';

@Injectable()
export class AuthRepository {
  private _supabase: SupabaseClient;
  constructor(private readonly _supabaseClientFactory: SupabaseService) {
    this._supabase = this._supabaseClientFactory.createClient();
  }

  async signUp(email: string, password: string): Promise<any> {
    const { data, error } = await this._supabase.auth.signUp({
      email,
      password,
    });
    if (error) throw new BadRequestException(error.message);
    return data;
  }

  async signIn(email: string, password: string): Promise<any> {
    const { data, error } = await this._supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw new BadRequestException(error.message);
    return data;
  }

  async resetPassword(email: string): Promise<any> {
    const { data, error } = await this._supabase.auth.resetPasswordForEmail(
      email,
    );
    if (error) throw new BadRequestException(error.message);
    return data;
  }

  async setNewPassword(password: string): Promise<any> {
    const { data, error } = await this._supabase.auth.updateUser({
      password,
    });
    if (error) throw new BadRequestException(error.message);
    return data;
  }
}
