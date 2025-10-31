import { IsString, IsNotEmpty } from 'class-validator';

export class EditItemDto {
  @IsString()
  @IsNotEmpty()
  item_name: string;

  updatedAt: string;
}
