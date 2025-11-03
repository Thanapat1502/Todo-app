import { SetMetadata } from '@nestjs/common';
import { UserRoleEnum } from 'common/enum/user/UserRole.enum';

export const Roles = (role: UserRoleEnum) => SetMetadata('role', role);
