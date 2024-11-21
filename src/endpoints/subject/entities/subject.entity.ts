import { ApiProperty } from '@nestjs/swagger';
import { Subjects } from '@prisma/client';

export class SubjectEntity implements Subjects {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  lesson: string;

  @ApiProperty()
  question: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
