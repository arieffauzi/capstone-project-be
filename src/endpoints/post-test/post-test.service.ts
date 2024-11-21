import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreatePostTestDto } from './dto/create-post-test.dto';
import { UpdatePostTestDto } from './dto/update-post-test.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { FindPostTestDTO } from './dto/find-post-test.dto';

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
      console.log('error', error);
      throw new InternalServerErrorException(error);
    }
  }

  async findAll(findPostTestDto: FindPostTestDTO) {
    const { page, size, assign_to_name, scored_by_name } = findPostTestDto;
    const skip = ((page ?? 1) - 1) * (size ?? 10);
    const take = size ?? 10;

    try {
      const postTest = this.postTest.findMany({
        take,
        skip,
        omit: {
          assign_to_id: true,
          scored_by_id: true,
          subject_id: true,
        },
        include: {
          subject: true,
          assign_to: {
            where: {
              ...(assign_to_name ? { name: assign_to_name } : {}),
            },
          },
          scored_by: {
            where: {
              ...(scored_by_name ? { name: scored_by_name } : {}),
            },
          },
        },
      });
      return postTest;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async findOne(id: number) {
    try {
      const subject = await this.postTest.findUnique({ where: { id } });

      if (!subject) {
        throw new NotFoundException('Post test not found');
      }
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async update(id: number, updatePostTestDto: UpdatePostTestDto) {
    try {
      const subject = await this.postTest.findUnique({ where: { id } });

      if (!subject) {
        throw new NotFoundException('Subject not found');
      }

      const deletedSubject = await this.postTest.update({
        where: { id },
        data: updatePostTestDto,
      });
      return deletedSubject;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async remove(id: number) {
    try {
      const subject = await this.postTest.findUnique({ where: { id } });

      if (!subject) {
        throw new NotFoundException('Subject not found');
      }

      return await this.postTest.delete({ where: { id } });
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
