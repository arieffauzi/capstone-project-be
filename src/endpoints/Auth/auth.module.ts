//src/auth/auth.module.ts
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { PrismaModule } from 'src/prisma/prisma.module';
import { JwtStrategy } from './jwt.strategy';
import { UsersModule } from '../users/users.module';

export const jwtSecret = 'capstoneJwtSecret';

@Module({
  imports: [
    PrismaModule,
    PassportModule,
    JwtModule.register({
      secret: jwtSecret,
      signOptions: { expiresIn: '5m' }, // e.g. 30s, 7d, 24h
    }),
    UsersModule
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}