import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class StudentsService {
  constructor(private prisma: PrismaService) {}

  private students = this.prisma.students;

  create(createStudentDto: CreateStudentDto) {
    try {
      const result = this.students.create({ data: createStudentDto });
      return result;
    } catch (error) {
      return error;
    }
  }

  findAll() {
    try {
      const result = this.students.findMany({
        omit: {
          password: true,
        },
      });
      return result;
    } catch (error) {
      return error;
    }
  }

  async findOne(id: number) {
    return `This action returns a #${id} student`;
  }

  update(id: number, updateStudentDto: UpdateStudentDto) {
    return `This action updates a #${id} student`;
  }

  remove(id: number) {
    return `This action removes a #${id} student`;
  }
}
