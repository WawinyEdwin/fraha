import { Injectable } from '@nestjs/common';
import { AuthRepository } from './auth.repository';

@Injectable()
export class AuthService {
  constructor(private readonly _authRepo: AuthRepository) {}
  async signUp(email: string, password: string): Promise<any> {
    const response = await this._authRepo.signUp(email, password);
    return response;
  }

  async signIn(email: string, password: string): Promise<any> {
    const response = await this._authRepo.signIn(email, password);
    return response;
  }

  async resetPassword(email: string): Promise<any> {
    const response = await this._authRepo.resetPassword(email);
    return response;
  }

  async setNewPassword(password: string): Promise<any> {
    const response = await this._authRepo.setNewPassword(password);
    return response;
  }
}
