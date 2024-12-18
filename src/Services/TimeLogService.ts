import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTimeLogDTO } from 'src/DTOs/TimeLog/CreateTimeLogDTO';
import { TimeLog } from 'src/Models/TimeLog';
import { Repository } from 'typeorm';
import { generateUUID } from './helpers';

@Injectable()
export class TimeLogService {
  constructor(
    @InjectRepository(TimeLog)
    private timeLogRepository: Repository<TimeLog>,
  ) {}
  async createProjectTimeLog(
    projectId: string,
    createTimeLogDTO: CreateTimeLogDTO,
  ): Promise<void> {
    const timeLog = new TimeLog();
    timeLog.id = generateUUID();
    timeLog.projectId = projectId;
    timeLog.startTime = createTimeLogDTO.startTime;
    timeLog.endTime = createTimeLogDTO.endTime;
    timeLog.timeStamp = new Date();

    console.log('timeLog ', timeLog);

    await this.timeLogRepository.save(timeLog);
  }

  async getAllProjectsTimeLogs(projectId: string): Promise<TimeLog[]> {
    return await this.timeLogRepository.find({
      where: { projectId: projectId },
    });
  }
}
