import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey:
        process.env.JWT_SECRET ||
        'your-super-secret-and-long-key-at-least-32-chars',
    });
  }

  async validate(payload: any) {
    // payload คือข้อมูลที่ sign ตอน login
    return { userId: payload.sub, email: payload.email, role: payload.role };
  }
}
