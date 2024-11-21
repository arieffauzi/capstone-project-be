import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdatePostTestDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  @IsOptional()
  score?: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  answer?: string;
}
