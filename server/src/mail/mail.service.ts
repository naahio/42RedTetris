import { Inject, Injectable, Logger } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { ConfigType } from '@nestjs/config';
import SmtpConfig from './config/smtp.config';

@Injectable()
export class MailService {
  constructor(
    @Inject(SmtpConfig.KEY)
    private readonly smtpConfig: ConfigType<typeof SmtpConfig>,
  ) {}

  private transporter = nodemailer.createTransport(
    {
      host: this.smtpConfig.host,
      port: this.smtpConfig.port,
      secure: true,
      auth: {
        user: this.smtpConfig.user,
        pass: this.smtpConfig.pass,
      },
    },
    { from: this.smtpConfig.user },
  );
  private logger = new Logger(MailService.name);

  async sendOtpEmail(email: string, otp: string) {
    await this.transporter
      .sendMail({
        to: email,
        subject: 'You One-Time Password for red-tetris',
        html: `<!DOCTYPE html>
              <html>
                <head>
                  <meta charset="UTF-8" />
                  <title>Your One-Time Password</title>
                  <style>
                    body {
                      font-family: Arial, sans-serif;
                      background-color: #f4f4f4;
                      color: #333;
                      padding: 20px;
                    }
                    .container {
                      max-width: 600px;
                      margin: 0 auto;
                      background-color: #fff;
                      padding: 30px;
                      border-radius: 5px;
                      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
                    }
                    h1 {
                      color: #007bff;
                      margin-top: 0;
                    }
                    p {
                      line-height: 1.5;
                    }
                    .otp {
                      font-size: 24px;
                      font-weight: bold;
                      color: #007bff;
                      padding: 10px;
                      border: 1px solid #007bff;
                      border-radius: 5px;
                      text-align: center;
                      margin: 20px 0;
                    }
                    .expires {
                      font-size: 14px;
                      color: #777;
                    }
                  </style>
                </head>
                <body>
                  <div class="container">
                    <h1>Your One-Time Password</h1>
                    <p>Dear User,</p>
                    <p>Please use the following one-time password to complete your request:</p>
                    <div class="otp">${otp}</div>
                    <p class="expires">This OTP will expire in 5 minutes.</p>
                    <p>If you did not request this OTP, please ignore this email.</p>
                    <p>Thank you for using our service.</p>
                    <p>Best regards,<br />red-tetris</p>
                  </div>
                </body>
              </html>`,
      })
      .then((info: nodemailer.SentMessageInfo) => {
        this.logger.log(`OTP email sent to ${email}: ${info.messageId}`);
      });

    return {
      message: `OTP sent successfully to ${email}.`,
    };
  }

  async sendResetPasswordEmail(email: string, token: string) {
    const url = `${process.env.APP_HOST_URL}/reset-password?token=${token}`;

    await this.transporter.sendMail({
      to: email,
      subject: 'Reset Password',
      html: `
        <p>Click <a href="${url}">here</a> to reset your password</p>
      `,
    });
  }
}
