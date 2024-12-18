import { Body, Controller, Get, HttpCode, Param, Post, Delete } from '@nestjs/common';
import { CreateProjectDTO } from './DTOs/Project/CreateProjectDTO';
import { ProjectService } from './Services/ProjectService';
import { CreateTimeLogDTO } from './DTOs/TimeLog/CreateTimeLogDTO';
import { TimeLogService } from './Services/TimeLogService';
import { mergeTimeLogs } from './Services/helpers';
import { projectToOutDTO, timeLogToOutDTO } from './Services/mappers';
import { ProjectOutDTO } from './DTOs/Project/ProjectOutDTO';
import { TimeLogOutDTO } from './DTOs/TimeLog/TimeLogOutDTO';

@Controller()
export class AppController {
  constructor(
    private readonly projectService: ProjectService,
    private readonly timeLogService: TimeLogService,
  ) {}

  @Get('/projects')
  async getProjects(): Promise<ProjectOutDTO[]> {
    return (await this.projectService.getAllProjects()).map(projectToOutDTO);
  }

  @Post('create')
  @HttpCode(204)
  async createProject(
    @Body() createProjectDTO: CreateProjectDTO,
  ): Promise<void> {
    await this.projectService.createProject(createProjectDTO);
  }

  @Post('complete/:id')
  @HttpCode(200)
  async completeProject(@Param('id') id: string): Promise<void> {
    await this.projectService.completeProject(id);
  }

  @Delete(':id')
  @HttpCode(200)
  async deleteProject(@Param('id') id: string): Promise<void> {
    await this.projectService.deleteProject(id);
  }

  @Post('log/create/:id')
  @HttpCode(204)
  async CreateLog(
    @Param('id') id: string,
    @Body() createTimeLogDTO: CreateTimeLogDTO,
  ): Promise<void> {
    await this.projectService.getProjectOrThrow(id);

    await this.timeLogService.createProjectTimeLog(id, createTimeLogDTO);
  }

  @Get('project/:id/logs')
  async getProjectLogs(@Param('id') id: string): Promise<TimeLogOutDTO[]> {
    const allProjectLogs = await this.timeLogService.getAllProjectsTimeLogs(id);

    return mergeTimeLogs(allProjectLogs).map(timeLogToOutDTO);
  }
}
