import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { ItemsService } from 'src/items/items.service';

@Injectable()
export class AdminService {
  constructor(
    private readonly userService: UserService,
    private readonly itemService: ItemsService,
  ) {}

  findAllUser() {
    const allUser = this.userService.findAllUser();
    return allUser;
  }

  findAllItems() {
    const allItems = this.itemService.findAllItems();

    return allItems;
  }

  findUserItem(userId: number) {
    const userItem = this.itemService.findMyItems(userId);
    return userItem;
  }
}
