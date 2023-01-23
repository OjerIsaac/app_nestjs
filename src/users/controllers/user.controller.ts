import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { User } from '../tables.entity';
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

    @Post('auth/login')
    async login(@Body() userData: User): Promise<any> {
        return this.userService.login(userData);
        // const user = await this.userService.login(userData);
        // if (!user) return { message: 'Invalid credentials' };
        // const payload = { email: user.email, sub: user.id };
        // const token = this.jwtService.sign(payload);
        // return { token };
    }
}
