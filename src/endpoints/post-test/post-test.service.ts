import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreatePostTestDto } from './dto/create-post-test.dto';
import { UpdatePostTestDto } from './dto/update-post-test.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PostTestService {
  constructor(private prisma: PrismaService) {}

  private postTest = this.prisma.postTest;

  async create(createPostTestDto: CreatePostTestDto) {
    const { assign_to_id, subject_id } = createPostTestDto;
    try {
      const result = await this.postTest.create({
        data: {
          assign_to: {
            connect: {
              id: assign_to_id,
            },
          },
          subject: {
            connect: {
              id: subject_id,
            },
          },
        },
      });
      return result;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  findAll() {
    return `This action returns all postTest`;
  }

  findOne(id: number) {
    return `This action returns a #${id} postTest`;
  }

  update(id: number, updatePostTestDto: UpdatePostTestDto) {
    return `This action updates a #${id} postTest`;
  }

  remove(id: number) {
    return `This action removes a #${id} postTest`;
  }
}
