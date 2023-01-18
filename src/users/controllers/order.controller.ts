import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { Order } from '../tables.entity';
import { OrderService } from '../services/order.service';
import { JwtAuthGuard } from '../auth.guard';

@Controller('api/v1')
@UseGuards(JwtAuthGuard)
export class OrderController {
    constructor(private readonly orderService: OrderService) {}

    @Post('order')
    async create(@Body() orderData: Order): Promise<any> {
        return this.orderService.create(orderData);
    }
}
