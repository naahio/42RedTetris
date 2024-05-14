import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/signin.dto';
import { SignUpDto } from './dto/signup.dto';
import { OtpService } from './otp.service';
import { GetOtpDto } from './dto/get-otp-dto';
import { VerifyOtpDto } from './dto/verify-otp.dto';
import { Response } from 'express';
import { ResetPasswordDto } from './dto/reset-password.dto';
import { ChangePasswordDto } from './dto/change-password.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly otpService: OtpService,
  ) {}

  @Get('signin')
  async signIn(@Body() signInDto: SignInDto, @Res() res: Response) {
    return this.authService.signIn(signInDto, res);
  }

  @Post('signup')
  async signUp(@Body() signUpDto: SignUpDto) {
    return this.authService.signUp(signUpDto);
  }

  @Post('otp')
  async sendOtp(@Body() { email }: GetOtpDto) {
    return this.authService.sendOtp(email);
  }

  @Post('verify-otp')
  async verifyOtp(@Body() otpDto: VerifyOtpDto) {
    const { email, otp } = otpDto;
    return this.otpService.validateOtp(email, otp);
  }

  @Post('reset-password')
  async resetPassword(@Body() { email }: ResetPasswordDto) {
    return this.authService.resetPassword(email);
  }

  @Post('change-password')
  async changePassword(@Body() { password, token }: ChangePasswordDto) {
    return this.authService.changePassword(password, token);
  }
}
