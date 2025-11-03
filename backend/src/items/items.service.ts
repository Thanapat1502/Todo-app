import {
  Injectable,
  NotFoundException,
  ForbiddenException,
} from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { ToggleStatusDto } from './dto/toggle-item.dto';
import { EditItemDto } from './dto/edit-item.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Item } from './entities/item.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(Item) private readonly repo: Repository<Item>,
  ) {}

  async findMyItems(userId: number) {
    return await this.repo.find({ where: { user_id: userId } });
  }

  createNewItem(createItemDto: CreateItemDto, userId: number) {
    // console.log('User Id service:', userId);
    const item = this.repo.create({ user_id: userId, ...createItemDto });
    console.log('item', item);
    return this.repo.save(item);
  }

  async editItem(id: number, editItemDto: EditItemDto, userId: number) {
    const item = await this.repo.findOne({ where: { id } });
    if (!item) throw new NotFoundException('Item not found');
    if (item.user_id !== userId) throw new ForbiddenException();
    return this.repo.update(id, editItemDto);
  }

  async toggleStatus(
    id: number,
    toggleStatusDto: ToggleStatusDto,
    userId: number,
  ) {
    const item = await this.repo.findOne({ where: { id } });
    if (!item) throw new NotFoundException('Item not found');
    if (item.user_id !== userId) throw new ForbiddenException();
    return this.repo.update(id, toggleStatusDto);
  }

  async remove(id: number, userId: number) {
    const item = await this.repo.findOne({ where: { id } });
    if (!item) throw new NotFoundException('Item not found');
    if (item.user_id !== userId) throw new ForbiddenException();
    return this.repo.delete(id);
  }

  findAllItems() {
    return this.repo.find();
  }
}
