import { IsNotEmpty,  IsString } from "class-validator";

export class PasswordRequestDto {
  @IsNotEmpty()
  @IsString()
  readonly email: string;
}
