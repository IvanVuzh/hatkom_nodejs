import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TimeLogModule } from './database/timelogs.module';
import { ProjectModule } from './database/project.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [DatabaseModule, TimeLogModule, ProjectModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
