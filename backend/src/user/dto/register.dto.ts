import { UserRoleEnum } from 'common/enum/user/UserRole.enum';
import { IsEmail, IsNotEmpty, IsEnum, MinLength } from 'class-validator';

export class RegisterDTO {
  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @MinLength(6)
  @IsNotEmpty()
  readonly password: string;

  @IsNotEmpty()
  readonly username: string;

  @IsEnum(UserRoleEnum)
  @IsNotEmpty()
  readonly role: UserRoleEnum;
}
