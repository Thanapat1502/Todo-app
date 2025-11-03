import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
  ParseIntPipe,
} from '@nestjs/common';
import { ItemsService } from './items.service';
import { CreateItemDto } from './dto/create-item.dto';
import { AuthGuard } from '@nestjs/passport';
import { EditItemDto } from './dto/edit-item.dto';
import { ToggleStatusDto } from './dto/toggle-item.dto';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  async create(@Request() req: any, @Body() createItemDto: CreateItemDto) {
    const userId = req.user?.userId as number;
    console.log('User Id controller:', req.user);
    return this.itemsService.createNewItem(createItemDto, userId);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('my-items')
  findMyItems(@Request() req: any) {
    const userId = req.user?.userId as number;
    return this.itemsService.findMyItems(userId);
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch('edit/:id')
  update(
    @Request() req: any,
    @Param('id', ParseIntPipe) id: number,
    @Body() editItemDto: EditItemDto,
  ) {
    const userId = req.user?.userId as number;
    return this.itemsService.editItem(id, editItemDto, userId);
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch('status/:id')
  async toggleStatus(
    @Request() req: any,
    @Param('id', ParseIntPipe) id: number,
    @Body() toggleStatusDto: ToggleStatusDto,
  ) {
    const userId = req.user?.userId as number;
    return this.itemsService.toggleStatus(id, toggleStatusDto, userId);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete('delete/:id')
  remove(@Param('id', ParseIntPipe) id: number, @Request() req: any) {
    const userId = req.user?.userId as number;
    return this.itemsService.remove(id, userId);
  }

  @Get()
  findAll() {
    return this.itemsService.findAllItems();
  }
}
