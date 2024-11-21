import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { FindSubjectDTO } from './dto/find-subject.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class SubjectService {
  constructor(private prisma: PrismaService) {}

  private subject = this.prisma.subjects;

  async create(createSubjectDto: CreateSubjectDto) {
    try {
      const result = await this.subject.create({ data: createSubjectDto });
      return result;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async findAll(findSubjectDto: FindSubjectDTO) {
    const { page, size, name } = findSubjectDto;
    const skip = ((page ?? 1) - 1) * (size ?? 10);
    const take = size ?? 10;
    const where = {
      ...(name ? { name } : {}),
    };
    try {
      const [subjects, total] = await this.prisma.$transaction([
        this.subject.findMany({ take, skip, where }),
        this.subject.count({ where }),
      ]);
      return { data: subjects, total };
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async findOne(id: number) {
    try {
      const subject = await this.subject.findUnique({ where: { id } });

      if (!subject) {
        throw new NotFoundException('Subject not found');
      }
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async update(id: number, updateSubjectDto: UpdateSubjectDto) {
    try {
      const subject = await this.subject.findUnique({ where: { id } });

      if (!subject) {
        throw new NotFoundException('Subject not found');
      }

      const deletedSubject = await this.subject.update({
        where: { id },
        data: updateSubjectDto,
      });
      return deletedSubject;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async remove(id: number) {
    try {
      const subject = await this.subject.findUnique({ where: { id } });

      if (!subject) {
        throw new NotFoundException('Subject not found');
      }

      return await this.subject.delete({ where: { id } });
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
