import { PartialType } from '@nestjs/swagger';
import { CreatePostTestDto } from './create-post-test.dto';

export class UpdatePostTestDto extends PartialType(CreatePostTestDto) {}
