import { Injectable } from '@nestjs/common';
import { createClient } from '@supabase/supabase-js';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class SupabaseService {
  private readonly _url: string;
  private readonly _anonApiKey: string;
  private readonly _serviceRoleKey: string;

  constructor(private readonly _config: ConfigService) {
    this._url = this._config.get('SUPABASE_API_URL');
    this._anonApiKey = this._config.get('SUPABASE_API_KEY');
    this._serviceRoleKey = this._config.get('SUPABASE_SERVICE_ROLE_KEY');
  }

  createClient() {
    return createClient(this._url, this._anonApiKey, {
          auth: {
            persistSession: false,
          },
        });
  }

  createAdminClient() {
    return createClient(this._url, this._serviceRoleKey, {
          auth: {
            persistSession: false,
          },
        });
  }
}
