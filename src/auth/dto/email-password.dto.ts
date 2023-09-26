import { IsEmail, IsNotEmpty } from "class-validator";

export class EmailAndPasswordDto {
  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  @IsEmail()
  readonly password: string;
}
