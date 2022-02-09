import { Controller, UseGuards } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
// import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { User } from './users.entity';
import { UsersService } from './users.service';
// import { ApiBearerAuth } from '@nestjs/swagger'

@Crud({
    model:{
        type: User
    },
    routes: {
        only: ["createOneBase", "getOneBase"],
    },
})

// @ApiBearerAuth()
@Controller('usuarios/')
// @UseGuards(JwtAuthGuard)
export class UsersController implements CrudController<User>{
    constructor(public service: UsersService){}
}
