import { Module } from '@nestjs/common';
import { PostTestService } from './post-test.service';
import { PostTestController } from './post-test.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [PostTestController],
  providers: [PostTestService],
  imports: [PrismaModule],
})
export class PostTestModule {}
