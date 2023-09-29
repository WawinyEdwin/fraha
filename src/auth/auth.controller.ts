import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { EmailAndPasswordDto } from './dto/email-password.dto';
import { PasswordRequestDto } from './dto/password-request.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly _authService: AuthService) {}

  @Post('register')
  @HttpCode(201)
  async signUp(@Body() body: EmailAndPasswordDto): Promise<any> {
    const { email, password } = body;
    return await this._authService.signUp(email, password);
  }

  @Post('login')
  @HttpCode(200)
  async signIn(@Body() body: EmailAndPasswordDto): Promise<any> {
    const { email, password } = body;
    return await this._authService.signIn(email, password);
  }

  @Post('password/request')
  @HttpCode(200)
  async resetPassword(@Body() body: PasswordRequestDto): Promise<any> {
    const { email } = body;
    return await this._authService.resetPassword(email);
  }
}
