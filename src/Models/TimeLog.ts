import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('TimeLogs')
export class TimeLog {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid')
  projectId: string;

  @Column({ type: 'datetimeoffset', nullable: false })
  startTime: Date;

  @Column({ type: 'datetimeoffset', nullable: false })
  endTime: Date;

  @Column({ type: 'datetimeoffset', nullable: false })
  timeStamp: Date;
}
