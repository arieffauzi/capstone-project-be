import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class FindPostTestDTO {
  @ApiProperty()
  @IsOptional()
  @IsString()
  assign_to_name?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  scored_by_name?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  subject_name?: string;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  page?: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  size?: number;
}
