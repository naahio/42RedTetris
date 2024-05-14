import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TokenDocument = HydratedDocument<Token>;

@Schema({ expires: 86400 }) // 24 hours
export class Token {
  @Prop({ required: true, unique: true })
  token: string;

  @Prop({ required: true })
  email: string;
}

export const TokenSchema = SchemaFactory.createForClass(Token);
