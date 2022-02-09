import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Car } from './cars.entity'

@Injectable()
export class CarsService extends TypeOrmCrudService<Car>{
    constructor(@InjectRepository(Car) repo){
        super(repo)
    }
}
