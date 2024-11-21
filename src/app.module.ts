import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { SubjectModule } from './endpoints/subject/subject.module';
import { AuthModule } from './endpoints/Auth/auth.module';
import { PostTestModule } from './endpoints/post-test/post-test.module';
import { UsersModule } from './endpoints/users/users.module';

@Module({
  imports: [PrismaModule, SubjectModule, AuthModule, PostTestModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
