import { ApiProperty } from '@nestjs/swagger';
import { IsDate } from 'class-validator';

export class CreateTimeLogDTO {
  @ApiProperty({
    description: 'The start time of the log',
    type: String,
    format: 'date-time',
  })
  @IsDate()
  startTime: Date;

  @ApiProperty({
    description: 'The end time of the log',
    type: String,
    format: 'date-time',
  })
  @IsDate()
  endTime: Date;
}
