import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PostTestService } from './post-test.service';
import { CreatePostTestDto } from './dto/create-post-test.dto';
import { UpdatePostTestDto } from './dto/update-post-test.dto';
import { FindPostTestDTO } from './dto/find-post-test.dto';

@Controller('post-test')
export class PostTestController {
  constructor(private readonly postTestService: PostTestService) {}

  @Post()
  create(@Body() createPostTestDto: CreatePostTestDto) {
    return this.postTestService.create(createPostTestDto);
  }

  @Post('find')
  findAll(@Body() FindPostTestDTO: FindPostTestDTO) {
    return this.postTestService.findAll(FindPostTestDTO);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postTestService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePostTestDto: UpdatePostTestDto,
  ) {
    return this.postTestService.update(+id, updatePostTestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postTestService.remove(+id);
  }
}
