import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { StudentsModule } from './endpoints/students/students.module';
import { SubjectModule } from './endpoints/subject/subject.module';
import { AuthModule } from './endpoints/Auth/auth.module';
import { PostTestModule } from './endpoints/post-test/post-test.module';

@Module({
  imports: [PrismaModule, StudentsModule, SubjectModule, AuthModule, PostTestModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
