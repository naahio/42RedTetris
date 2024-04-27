import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IUser } from './classes/IUser';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto): Promise<IUser> {
    const createdUser = new this.userModel(createUserDto);
    try {
      const newUser = await createdUser.save().then((user) => IUser.fromEntity(user));
      return newUser;
    } catch (error) {
      if (error.code === 11000) {
        throw new ConflictException('Username or email already exists');
      }
      throw new Error(error);
    }
  }

  async findAll(): Promise<IUser[]> {
    return await this.userModel.find().then((users) => users.map((user) => IUser.fromEntity(user)));
  }

  async findOne(lookfor: string): Promise<IUser> {
    return await this.userModel
      .findOne({ $or: [{ username: lookfor }, { email: lookfor }] })
      .then((user) => {
        if (!user) {
          throw new NotFoundException(`User ${lookfor} not found`);
        }
        return IUser.fromEntity(user);
      });
  }

  async update(lookfor: string, data: Partial<IUser>): Promise<IUser> {
    return await this.userModel
      .findOneAndUpdate({ $or: [{ username: lookfor }, { email: lookfor }] }, data, { new: true })
      .then((user) => {
        if (!user) {
          throw new NotFoundException(`User ${lookfor} not found`);
        }
        return IUser.fromEntity(user);
      });
  }
}
