import { Injectable } from '@nestjs/common';
import { AuthRepository } from './auth.repository';

@Injectable()
export class AuthService {
  constructor(private readonly _authRepo: AuthRepository) {}
  async signUp(email: string, password: string): Promise<any> {
    return await this._authRepo.signUp(email, password);
  }

  async signIn(email: string, password: string): Promise<any> {
    return await this._authRepo.signIn(email, password);
  }

  async resetPassword(email: string): Promise<any> {
    return await this._authRepo.resetPassword(email);
  }

  async setNewPassword(password: string): Promise<any> {
    return await this._authRepo.setNewPassword(password);
  }
}
