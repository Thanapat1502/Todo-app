import { Exclude } from 'class-transformer';
import { UserRoleEnum } from 'common/enum/user/UserRole.enum';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  @Exclude()
  password: string;

  @Column()
  username: string;

  @Column({ default: false })
  role: UserRoleEnum;

  @CreateDateColumn()
  createdAt: Date;
}
