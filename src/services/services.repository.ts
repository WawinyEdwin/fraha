import { BadRequestException, Injectable } from '@nestjs/common';
import { SupabaseClient } from '@supabase/supabase-js';
import { SupabaseService } from 'src/supabase/supabase.service';
import { IService } from './services.types';

@Injectable()
export class ServicesRepository {
  private _supabase: SupabaseClient;

  constructor(private readonly _supabaseClientFactory: SupabaseService) {
    this._supabase = this._supabaseClientFactory.createClient();
  }

  public async getServices(): Promise<IService[]> {
    const { data, error } = await this._supabase
      .from('services')
      .select('id, name');
    if (error) {
      throw new BadRequestException(error.message);
    }
    return data;
  }
}
