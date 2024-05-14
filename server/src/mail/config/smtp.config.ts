import { registerAs } from '@nestjs/config';

export default registerAs('smtp', () => ({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 587),
  user: process.env.SMTP_USERNAME,
  pass: process.env.SMTP_PASSWORD,
}));
