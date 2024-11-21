import { ApiProperty } from "@nestjs/swagger";
import { Subjects } from "@prisma/client";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreatePostTestDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  subject_id!: number ;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  assign_to_id!: number;
}
