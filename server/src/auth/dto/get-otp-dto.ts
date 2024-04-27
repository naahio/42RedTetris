import { IsEmail } from "class-validator";

export class GetOtpDto {
  @IsEmail()
  email: string;
}
