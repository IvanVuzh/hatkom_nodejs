import { plainToClass } from 'class-transformer';
import { ProjectOutDTO } from 'src/DTOs/Project/ProjectOutDTO';
import { TimeLogOutDTO } from 'src/DTOs/TimeLog/TimeLogOutDTO';
import { Project } from 'src/Models/Project';
import { TimeLog } from 'src/Models/TimeLog';

// maybe create generic mapper, but these are too small to bother
export const timeLogToOutDTO = (timeLog: TimeLog): TimeLogOutDTO => {
  return plainToClass(TimeLogOutDTO, timeLog, {
    excludeExtraneousValues: true, //треба @Expose тоді додавати на проперті, які будуть мапитись сюди (чому просто не мапити все що є в дто не ясно)
  });
};

export const projectToOutDTO = (project: Project): ProjectOutDTO => {
  return plainToClass(ProjectOutDTO, project, {
    excludeExtraneousValues: true,
  });
};
