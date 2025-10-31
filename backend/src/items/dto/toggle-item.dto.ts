import { IsNotEmpty, IsEnum } from 'class-validator';
import { ItemStatusEnum } from 'common/enum/items/ItemStatus.enum';

export class ToggleStatusDto {
  @IsEnum(ItemStatusEnum)
  @IsNotEmpty()
  status: ItemStatusEnum;

  updatedAt: string;
}
