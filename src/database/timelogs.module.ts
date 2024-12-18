import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TimeLog } from '../Models/TimeLog';
import { TimeLogService } from 'src/Services/TimeLogService';

@Module({
  imports: [TypeOrmModule.forFeature([TimeLog])],
  providers: [TimeLogService],
  exports: [TimeLogService],
})
export class TimeLogModule {}
