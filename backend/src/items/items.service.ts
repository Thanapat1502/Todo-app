import { Injectable } from '@nestjs/common';
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

  createNewItem(createItemDto: CreateItemDto, userId: number) {
    const item = this.repo.create({ userId, ...createItemDto });
    return this.repo.save(item);
  }

  findMyItems(userId: number) {
    return this.repo.find({ where: { userId } });
  }

  editItem(id: number, editItemDto: EditItemDto) {
    return this.repo.update(id, editItemDto);
  }
  toggleStatus(id: number, toggleStatusDto: ToggleStatusDto) {
    return this.repo.update(id, toggleStatusDto);
  }

  remove(id: number) {
    return `This action removes a #${id} item`;
  }

  findAll() {
    return this.repo.find();
  }
}
