import { Injectable, Request, Response } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
// import { LoginDTO } from './dto/auth-login.dto';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user/entities/user.entity';
import * as bcrypt from 'bcrypt';

export type PublicUser = Omit<User, 'password'>;

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(
    email: string,
    password: string,
  ): Promise<PublicUser | null> {
    const user = await this.userService.findByEmail(email);
    if (!user) return null;

    const matched = await bcrypt.compare(password, user.password);
    if (!matched) return null;

    const { password: _pwd, ...result } = user;
    return result;
  }

  signIn(user: User) {
    const payload = { email: user.email, sub: user.id, role: user.role };
    return {
      access_token: this.jwtService.sign(payload),
      user_role: user.role,
    };
  }
}
