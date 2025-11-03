import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { UserModule } from 'src/user/user.module';
import { ItemsModule } from 'src/items/items.module';
// import { UserService } from 'src/user/user.service';
// import { ItemsService } from 'src/items/items.service';

@Module({
  imports: [UserModule, ItemsModule],
  controllers: [AdminController],
  providers: [AdminService],
  exports: [AdminModule],
})
export class AdminModule {}
