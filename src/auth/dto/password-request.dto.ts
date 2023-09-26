import { IsNotEmpty, IsEmail } from "class-validator";

export class PasswordRequestDto {
  @IsNotEmpty()
  @IsEmail()
  readonly email: string;
}
