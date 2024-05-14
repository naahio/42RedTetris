import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { OtpService } from './otp.service';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { MailModule } from 'src/mail/mail.module';
import { MongooseModule } from '@nestjs/mongoose';
import { TokenSchema } from './schemas/token.schema';
import { OTPSchema } from './schemas/otp.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Token', schema: TokenSchema },
      { name: 'OTP', schema: OTPSchema },
    ]),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '1d' },
    }),
    UsersModule,
    MailModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, OtpService],
})
export class AuthModule {}
