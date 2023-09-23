import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly _authService: AuthService) {}

  @Post('signup')
  async signUp(@Body() body: any): Promise<any> {
    const { email, password } = body;
    const response = await this._authService.signUp(email, password);
    return response;
  }

  @Post('signin')
  async signIn(@Body() body: any): Promise<any> {
    const { email, password } = body;
    const response = await this._authService.signIn(email, password);
    return response;
  }

  @Post('password/request')
  async resetPassword(@Body() body: any): Promise<any> {
    const { email } = body;
    const response = await this._authService.resetPassword(email);
    return response;
  }
}
