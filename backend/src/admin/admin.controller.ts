import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { AdminService } from './admin.service';
import { UserRoleEnum } from 'common/enum/user/UserRole.enum';
import { Roles } from 'lib/decorator/role.decorator';
import { RoleGuard } from 'lib/guard/custom-role.guard';
import { AuthGuard } from '@nestjs/passport';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @UseGuards(AuthGuard('jwt'), RoleGuard)
  @Roles(UserRoleEnum.ADMIN)
  @Get('/all-users')
  findAllUser() {
    const allUser = this.adminService.findAllUser();
    return allUser;
  }

  @UseGuards(AuthGuard('jwt'), RoleGuard)
  @Roles(UserRoleEnum.ADMIN)
  @Get('/all-items')
  findAllItems() {
    const allItems = this.adminService.findAllItems();
    return allItems;
  }

  @UseGuards(AuthGuard('jwt'), RoleGuard)
  @Roles(UserRoleEnum.ADMIN)
  @Get('/user-items/:userId')
  findUserItem(@Param('userId') userId: number) {
    return this.adminService.findUserItem(userId);
  }
}
