import { IsEmail, IsNotEmpty } from "class-validator";

export class PasswordRequestDto {
  @IsNotEmpty()
  @IsEmail()
  readonly email: string;
}
