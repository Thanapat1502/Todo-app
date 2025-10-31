import { Injectable } from '@nestjs/common';
import { LoginDTO } from './dto/auth-login.dto';

@Injectable()
export class AuthService {
  login(loginDOT: LoginDTO) {
    const loginInfo = {
      email: loginDOT.email,
      password: loginDOT.password,
    };

    console.log(loginInfo);
    return 'This action register new user';
  }
}
