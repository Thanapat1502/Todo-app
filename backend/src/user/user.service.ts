import { RegisterDTO } from './dto/register.dto';
import {
  Injectable,
  ConflictException,
  UseInterceptors,
  ClassSerializerInterceptor,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
// import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly repo: Repository<User>,
  ) {}

  async register(registerDOT: RegisterDTO): Promise<User> {
    try {
      const existed = await this.repo.findOne({
        where: { email: registerDOT.email },
      });
      if (existed) throw new ConflictException('Email already exists');

      const hashedPassword: string = (await bcrypt.hash(
        registerDOT.password,
        10,
      )) as string;

      const user = this.repo.create({
        ...registerDOT,
        password: hashedPassword,
      });

      return this.repo.save(user);
    } catch (err) {
      console.error('register error:', err);
      throw err;
    }
  }

  @UseInterceptors(ClassSerializerInterceptor)
  async findByEmail(email: string) {
    return this.repo.findOne({ where: { email } });
  }

  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }

  // //Admin Only
  @UseInterceptors(ClassSerializerInterceptor)
  async findAll() {
    return this.repo.find();
  }
}
