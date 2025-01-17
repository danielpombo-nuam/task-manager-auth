import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './jwt/jwt.strategy'
import { UserService } from 'src/core-task-manager/application/services';
import { CoreTaskManager } from 'src/core-task-manager/task-manager.module';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'default_secret', // Replace with a secure key in production
      signOptions: { expiresIn: '1h' }, // Token expiration time
    }),
    CoreTaskManager
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, UserService],
})
export class AuthModule {}
