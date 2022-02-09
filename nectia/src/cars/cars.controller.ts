import { Controller, UseGuards } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Car } from './cars.entity';
import { CarsService } from './cars.service';
import { ApiBearerAuth } from '@nestjs/swagger'

@Crud({
    model:{
        type: Car
    }
})

@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('autos/')
export class CarsController implements CrudController<Car>{
    constructor(public service: CarsService){}
}
