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
    const userId = req.user?.id as number;
    return this.itemsService.createNewItem(createItemDto, userId);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('my-items')
  findMyItems(@Request() req: any) {
    const userId = req.user?.id as number;
    return this.itemsService.findMyItems(userId);
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch(':id/edit')
  update(@Param('id') id: string, @Body() editItemDto: EditItemDto) {
    return this.itemsService.editItem(+id, editItemDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch(':id/status')
  async toggleStatus(
    @Param('id') id: number,
    @Body() toggleStatusDto: ToggleStatusDto,
  ) {
    return this.itemsService.toggleStatus(id, toggleStatusDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.itemsService.remove(+id);
  }

  @Get()
  findAll() {
    return this.itemsService.findAll();
  }
}
