import {
  IsEmail,
  IsLowercase,
  IsString,
  Matches,
  MaxLength,
  MinLength,
  ValidateIf,
} from 'class-validator';

export class SignInDto {
  @IsString()
  @IsEmail()
  @ValidateIf((o) => !o.username)
  readonly email: string;

  @IsString()
  @MaxLength(20)
  @MinLength(3)
  @IsLowercase()
  @Matches(/^[a-z0-9\-_.]+$/)
  @ValidateIf((o) => !o.email)
  readonly username: string;

  @IsString()
  @MinLength(6)
  readonly password: string;
}
