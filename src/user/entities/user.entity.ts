import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UserRole } from '../types/userRole.type';
import { Question } from 'src/qustion/entities/qustion.entity';
import { Answer } from 'src/answer/entities/answer.entity';

@Entity('User')
export class User {
  @PrimaryGeneratedColumn({ type: 'int' })
  userId: number;

  @Column({ type: 'varchar', length: 15 })
  name: string;

  @Column({ type: 'int', length: 3 })
  age: number;

  @Column({ type: 'varchar', length: 2 })
  gender: string;

  @Column({ type: 'varchar', length: 30, unique: true })
  email: string; // 유니크 값

  @Column({ type: 'varchar', length: 15, select: false }) // DBMS를 위해 명시해주는 부분
  password: string; // TS를 위해 타입을 명시

  @Column({ type: 'varchar', length: 13 })
  phoneNumber: string;

  @CreateDateColumn({ type: 'timestamp', nullable: true })
  createdAt: Date;
  // Timestamp; //  === unix time stamp(인간이 보기 힘든 시간)

  @UpdateDateColumn({ type: 'timestamp', nullable: true })
  updatedAt: Date;

  @DeleteDateColumn({ type: 'timestamp', nullable: true })
  deletedAt: Date;

  //   @Column({ type: 'set', enum: UserRole, default: ['user'] })
  @Column({ type: 'enum', default: [UserRole.USER] })
  roles: UserRole[];

  @OneToMany(() => Question, (question) => question.user)
  questions: Question[];

  @OneToMany(() => Answer, (answer) => answer.user)
  answers: Answer[];
}
