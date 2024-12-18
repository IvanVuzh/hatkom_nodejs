import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { Project } from '../Models/Project';
import { TimeLog } from '../Models/TimeLog';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      ignoreEnvFile: false, // це якщо запускати через cli, то можна зразу в команді задати енв змінні
      isGlobal: false, // найс глобальні змінні плодити можна
    }),

    TypeOrmModule.forRoot({
      type: 'mssql',
      host: '127.0.0.1',
      port: 1433,
      username: 'sa',
      password: 'Password12!',
      database: 'hatkom.test',
      entities: [Project, TimeLog],
      synchronize: false, // створює нові таблички якщо тру
      options: {
        encrypt: true,
        trustServerCertificate: true, // Disable certificate validation (got error)
      },
    }),
  ],
})
export class DatabaseModule {}
