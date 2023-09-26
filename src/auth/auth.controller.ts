import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { EmailAndPasswordDto } from './dto/email-password.dto';
import { PasswordRequestDto } from './dto/password-request.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly _authService: AuthService) {}

  @Post('register')
  @HttpCode(201)
  async signUp(@Body() body: EmailAndPasswordDto): Promise<any> {
    const { email, password } = body;
    const response = await this._authService.signUp(email, password);
    return response;
  }

  @Post('login')
  @HttpCode(200)
  async signIn(@Body() body: EmailAndPasswordDto): Promise<any> {
    const { email, password } = body;
    const response = await this._authService.signIn(email, password);
    return response;
  }

  @Post('password/request')
  @HttpCode(200)
  async resetPassword(@Body() body: PasswordRequestDto): Promise<any> {
    const { email } = body;
    const response = await this._authService.resetPassword(email);
    return response;
  }
}
