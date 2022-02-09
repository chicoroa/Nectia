import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { User } from './users.entity'

@Injectable()
export class UsersService extends TypeOrmCrudService<User>{
    constructor(@InjectRepository(User) repo){
        super(repo);
    }
}

@Injectable()
export class UserAuthService {
  private readonly users = [
    {
      id: 1,
      username: 'nroa',
      password: '1234',
    }
  ];

  async findOne(username: string): Promise<User | undefined> {
      return this.users.find(user => user.username === username)
  }
}
