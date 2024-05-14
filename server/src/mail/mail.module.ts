import { Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { ConfigModule } from '@nestjs/config';
import smtpConfig from './config/smtp.config';

@Module({
  imports: [ConfigModule.forRoot({ load: [smtpConfig] })],
  providers: [MailService],
  exports: [MailService],
})
export class MailModule {}
