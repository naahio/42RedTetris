import { ForbiddenException, Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { SignUpDto } from './dto/signup.dto';
import { OtpService } from './otp.service';
import { UsersService } from 'src/users/users.service';
import * as argon2 from 'argon2';
import { SignInDto } from './dto/signin.dto';
import { Response } from 'express';
import { JwtService } from '@nestjs/jwt';
import { ConfigType } from '@nestjs/config';
import { MailService } from 'src/mail/mail.service';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Token } from './schemas/token.schema';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly mailService: MailService,
    private readonly otpService: OtpService,
    private readonly jwtService: JwtService,
    @InjectModel('Token') private readonly tokenModel: Model<Token>,
  ) {}

  async signUp(signUpDto: SignUpDto) {
    const hashedPassword = await argon2.hash(signUpDto.password);

    const payload = {
      username: signUpDto.username,
      email: signUpDto.email,
      password: hashedPassword,
    };
    return this.usersService.create(payload);
  }

  async signIn(signInDto: SignInDto, res: Response) {
    const { username, email, password } = signInDto;
    const lookfor = username || email;

    const user = await this.usersService.findOne(lookfor);
    const isPasswordValid = await argon2.verify(user.password, password);
    if (!isPasswordValid) {
      throw new UnauthorizedException({ message: 'Invalid username/email or password' });
    }

    const token = this.jwtService.sign(
      { _id: user._id, username: user.username, email: user.email },
      { expiresIn: '1d' },
    );

    res
      .cookie('token', token, { httpOnly: true, maxAge: 1000 * 60 * 60 * 24 })
      .status(202)
      .send({
        message: 'Login successful',
      });
  }

  async sendOtp(email: string) {
    const otp = await this.otpService.generateOtp(email);

    try {
      return await this.mailService.sendOtpEmail(email, otp);
    } catch (error) {
      this.otpService.clearOtp(email);
      return { message: 'Failed to send OTP' };
    }
  }

  async resetPassword(email: string) {
    await this.usersService.findOne(email);

    const token = this.jwtService.sign({ email, action: 'reset password' }, { expiresIn: '30m' });

    await this.mailService.sendResetPasswordEmail(email, token);
  }

  async changePassword(password: string, token: string) {
    try {
      const { email } = this.jwtService.verify(token, { secret: process.env.JWT_SECRET });

      const hashedPassword = await argon2.hash(password);

      await this.usersService.update(email, { password: hashedPassword });

      await this.tokenModel.create({ token });
    } catch (error) {
      throw new ForbiddenException('Invalid or expired token');
    }
  }
}
