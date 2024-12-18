import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class TimeLogOutDTO {
  @ApiProperty({
    description: 'Time log id',
    type: String,
  })
  @Expose()
  id: string;

  @ApiProperty({
    description: 'Id of the related Project',
    type: String,
  })
  @Expose()
  projectId: string;

  @ApiProperty({
    description: 'The start time of the Log',
    type: String,
    format: 'date-time',
  })
  @Expose()
  startTime: Date;

  @ApiProperty({
    description: 'The end time of the Log',
    type: String,
    format: 'date-time',
  })
  @Expose()
  endTime: Date;

  @ApiProperty({
    description: 'Timestamp of the Log',
    type: String,
    format: 'date-time',
  })
  @Expose()
  timeStamp: Date;
}
