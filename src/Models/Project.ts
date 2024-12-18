import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

// class Project from .Net 
// need to specify name, to connect to correct table
@Entity("Projects")
export class Project {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  name: string;

  // 'timestamptz' for DateTimeOffset
  @Column({ type: 'datetimeoffset', nullable: true })
  startTime?: Date;

  @Column({ type: 'datetimeoffset', nullable: true })
  endTime?: Date;

  // TimeSpan will be string (lol)
  @Column({ type: 'varchar', default: '00:00:00' })
  timeSpent: string;

  @Column({ default: false })
  isCompleted: boolean;
}
