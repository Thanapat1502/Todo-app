import { IsString, IsNotEmpty, IsEnum } from 'class-validator';

import { ItemStatusEnum } from 'common/enum/items/ItemStatus.enum';
export class CreateItemDto {
  @IsString()
  @IsNotEmpty()
  item_name: string;

  @IsEnum(ItemStatusEnum)
  status: ItemStatusEnum;

  createdAt: string;
  updatedAt: string;
}
