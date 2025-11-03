import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from 'src/user/entities/user.entity';
import { ItemStatusEnum } from 'common/enum/items/ItemStatus.enum';

@Entity()
export class Item {
  @PrimaryGeneratedColumn()
  id: number;

  // explicit FK column so you can accept userId in DTOs
  @Column()
  user_id: number;

  // relation property (do not name this `userId`)
  @ManyToOne(() => User, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column()
  item_name: string;

  @Column({ default: ItemStatusEnum.PENDING })
  status: ItemStatusEnum;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
