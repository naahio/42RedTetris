import { Exclude } from 'class-transformer';
import { Document, Types } from 'mongoose';
import { User } from '../schemas/user.schema';

export class IUser {
  _id?: string;

  username: string;

  email: string;

  score: number;

  @Exclude()
  password: string;

  constructor(username: string, email: string, score: number, password: string) {
    this.username = username;
    this.email = email;
    this.score = score;
    this.password = password;
  }

  static fromEntity(_doc: Document<unknown, {}, User> & User & { _id: Types.ObjectId }): IUser {
    console.log(_doc);

    const _id = _doc._id.toHexString();
    const { username, email, score, password } = _doc;
    return new IUser(username, email, score, password).set_id(_id);
  }

  set_id(_id: string): this {
    this._id = _id;
    return this;
  }
}
