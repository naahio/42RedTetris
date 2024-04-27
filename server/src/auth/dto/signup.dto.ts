import { IsEmail, IsLowercase, IsString, Matches, MaxLength, MinLength } from 'class-validator';

export class SignUpDto {
  @IsString()
  @MaxLength(20)
  @MinLength(3)
  @IsLowercase()
  @Matches(/^[a-z0-9\-_.]+$/)
  readonly username: string;

  @IsEmail()
  readonly email: string;

  @IsString()
  @MinLength(6)
  readonly password: string;
}
