import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards, Req } from '@nestjs/common';
import { Order } from '../tables.entity';
import { OrderService } from '../services/order.service';
import { JwtAuthGuard } from '../auth.guard';

@Controller('api/v1')
@UseGuards(JwtAuthGuard)
export class OrderController {
    constructor(private readonly orderService: OrderService) {}

    @Post(':id/new-order')
    async create(@Param('id') id, @Body() orderData: Order, @Req() req): Promise<any> {
        // orderData.user = req.user;
        return this.orderService.create(id, orderData);
    }

    @Get('fetch-order')
    async fetch(@Req() req): Promise<any> {
        // orderData.user = req.user;
        return this.orderService.findAll();
    }

    @Get(':id/fetch-single')
    async findOne(@Param('id') id): Promise<Order> {
        return this.orderService.findOne(id);
    }
}