import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { User, Order } from '../tables.entity';
import { UserService } from '../services/user.service';

@Controller('api/v1')
export class UserController {
    constructor(private userService: UserService){}
    @Get()
    index(): string {
        return "Hello there :-)";
    }

    @Post('auth/register')
    async register(@Body() userData: User): Promise<any> {
        return this.userService.register(userData);
    }  
}
