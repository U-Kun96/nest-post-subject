import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

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
}
