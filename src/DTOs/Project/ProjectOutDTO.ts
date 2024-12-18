import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsOptional, IsDate } from 'class-validator';

export class ProjectOutDTO {
  @ApiProperty({
    description: 'Project id',
    type: String,
  })
  @Expose()
  id: string;

  @ApiProperty({ description: 'The name of the project', type: String })
  name: string;

  @ApiProperty({
    description: 'The start time of the project',
    type: String,
    format: 'date-time',
  })
  @IsDate()
  @Expose()
  startTime: Date;

  @ApiProperty({
    description: 'The end time of the project',
    type: String,
    format: 'date-time',
  })
  @IsDate()
  @Expose()
  endTime: Date;

  @ApiProperty({
    description: 'Time spent on the project',
    required: false,
    format: '00:00:00',
  })
  @Expose()
  timeSpent: string;
}
