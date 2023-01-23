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
}