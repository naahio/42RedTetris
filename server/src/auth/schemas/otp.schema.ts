import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type OtpDocument = HydratedDocument<OTP>;

@Schema({ expireAfterSeconds: 300 }) // 5 minutes
export class OTP {
  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  otp: string;

  @Prop({ default: new Date(Date.now() + 5 * 60 * 1000) })
  expiresAt: Date;
}

export const OTPSchema = SchemaFactory.createForClass(OTP);
