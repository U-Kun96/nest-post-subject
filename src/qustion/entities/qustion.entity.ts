import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from 'src/user/entities/user.entity';
@Entity('Question')
export class Question {
  @PrimaryGeneratedColumn({ type: 'int' })
  questionId: number;

  @Column({ type: 'varchar', length: 200 })
  title: string;

  @Column({ type: 'text' }) // text도 length를 설정을 해줘야 하나?
  content: string;

  @CreateDateColumn({ type: 'timestamp', nullable: true })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', nullable: true })
  updatedAt: Date;

  @DeleteDateColumn({ type: 'timestamp', nullable: true })
  deletedAt: Date;

  @ManyToOne(() => User, (user) => user.userId, { cascade: true }) // 질문을 삭제했을 때 함께 삭제된다?
  @JoinColumn()
  user: User;
}
