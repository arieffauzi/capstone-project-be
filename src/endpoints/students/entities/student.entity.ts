import { ApiProperty } from '@nestjs/swagger';
import { Students } from '@prisma/client';

export class StudentEntity implements Students {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  username: string | null;

  @ApiProperty()
  password: string;

  @ApiProperty({ nullable: true })
  role_id: any;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
