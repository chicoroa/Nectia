import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users.entity'
import { UsersController } from './users.controller';
import { UserAuthService, UsersService } from './users.service';

@Module({
  imports:[TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [UserAuthService, UsersService],
  exports:[UserAuthService, UsersService],
})
export class UsersModule {}
