import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, IsDate, IsBoolean } from 'class-validator';

export class CreateProjectDTO {
  @ApiProperty({ description: 'The name of the project' })
  @IsString()
  name: string;

  @ApiProperty({
    description: 'The start time of the project',
    type: String,
    format: 'date-time',
  })
  @IsDate()
  startTime: Date;

  @ApiProperty({
    description: 'The end time of the project',
    type: String,
    format: 'date-time',
  })
  @IsDate()
  endTime: Date;

  @ApiProperty({
    description: 'Time spent on the project',
    required: false,
    format: '00:00:00'
  })
  @IsOptional()
  @IsString()
  timeSpent?: string;
}
