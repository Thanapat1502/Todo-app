import {
  Controller,
  Post,
  Body,
  UseGuards,
  Request,
  Res,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';
import type { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req: any, @Res({ passthrough: true }) res: Response) {
    // req.user is typed by Passport; here it will be PublicUser (without password)
    const { access_token, user_role } = await this.authService.signIn(req.user);
    res.cookie('access_token', access_token, { httpOnly: true });
    res.cookie('user_role', user_role, { httpOnly: false });

    return { message: 'Login success', access_token };
  }
}
