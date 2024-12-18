import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProjectDTO } from 'src/DTOs/Project/CreateProjectDTO';
import { Project } from 'src/Models/Project';
import { Repository } from 'typeorm';
import { generateUUID } from './helpers';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project)
    private projectRepository: Repository<Project>,
  ) {}

  async createProject(createProjectDTO: CreateProjectDTO): Promise<void> {
    const project = new Project();
    project.id = generateUUID();
    project.name = createProjectDTO.name;
    project.startTime = createProjectDTO.startTime;
    project.endTime = createProjectDTO.endTime;
    project.timeSpent = createProjectDTO.timeSpent ?? '00:00:00';
    project.isCompleted = false;

    await this.projectRepository.save(project);
  }

  async getAllProjects(): Promise<Project[]> {
    return await this.projectRepository.find();
  }

  async completeProject(id: string): Promise<void> {
    //can be written with 'update', but i'm probably too much of C# brain
    const project = await this.getProjectOrThrow(id);

    project.isCompleted = true;

    await this.projectRepository.save(project);
  }

  async deleteProject(id: string): Promise<void> {
    const project = await this.getProjectOrThrow(id);

    await this.projectRepository.delete(project);
  }

  async getProjectOrThrow(id: string): Promise<Project>{
    const project = await this.projectRepository.findOne({ where: { id: id } });

    if (!project){
      throw new Error(`Project with id ${id} not found`);
    }

    return project;
  }
}
