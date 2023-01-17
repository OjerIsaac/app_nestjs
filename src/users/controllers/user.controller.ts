import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { User, Order } from '../tables.entity';
import { UserService } from '../services/user.service';
import { JwtService } from '@nestjs/jwt';
import { AuthGuard } from '@nestjs/passport';

@Controller('api/v1')
export class UserController {
    constructor(private userService: UserService, private jwtService: JwtService){}
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

    // @Post('order')
    // @UseGuards(AuthGuard('jwt'))
    // async createOrder(@Body() orderData: Order): Promise<any> {
    //     // Code to create an order here
    //     return this.userService.create(orderData);
    //     // return { message: 'Order created successfully' };
    // }
}
