import { Question } from 'src/qustion/entities/qustion.entity';
import { User } from 'src/user/entities/user.entity';
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

@Entity('Answer')
export class Answer {
  @PrimaryGeneratedColumn({ type: 'int' })
  answerId: number;

  @Column({ type: 'text' })
  content: string;

  @CreateDateColumn({ type: 'timestamp', nullable: true })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', nullable: true })
  updatedAt: Date;

  @DeleteDateColumn({ type: 'timestamp', nullable: true })
  deletedAt: Date;

  @ManyToOne(() => User, (user) => user.userId, { cascade: true })
  @JoinColumn()
  user: User;

  @ManyToOne(() => Question, (qustion) => qustion.questionId, { cascade: true })
  @JoinColumn()
  qustion: Question;
}
