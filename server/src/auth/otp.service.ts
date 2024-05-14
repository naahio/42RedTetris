import { BadRequestException, Inject, Injectable, Logger } from '@nestjs/common';
import * as crypto from 'crypto';
import { ConfigType } from '@nestjs/config';
import { MailService } from 'src/mail/mail.service';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { OTP } from './schemas/otp.schema';
import { log } from 'console';

@Injectable()
export class OtpService {
  constructor(@InjectModel('OTP') private readonly otpModel: Model<OTP>) {}

  private logger = new Logger(OtpService.name);

  async generateOtp(email: string, expiresInMinutes: number = 5): Promise<string> {
    const otp = crypto.randomBytes(3).toString('hex').toUpperCase();

    const expiresAt = new Date(Date.now() + expiresInMinutes * 60 * 1000);

    await this.clearOtp(email);
    await this.otpModel.create({ email, otp, expiresAt });

    this.logger.log(`Generated OTP ${otp} for ${email}`);

    return otp;
  }

  async clearOtp(email: string) {
    await this.otpModel.deleteMany({ email }).exec();
  }

  async validateOtp(email: string, otpCode: string) {
    const cachedOtp = await this.otpModel.findOne({ email });

    if (!cachedOtp || cachedOtp.otp !== otpCode || cachedOtp.expiresAt < new Date()) {
      throw new BadRequestException('Invalid OTP');
    }
    await this.clearOtp(email);

    return {
      message: 'OTP validated',
    };
  }
}
