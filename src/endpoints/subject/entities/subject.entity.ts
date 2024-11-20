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
  post_test: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
