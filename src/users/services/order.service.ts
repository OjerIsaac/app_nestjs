import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from '../tables.entity';

@Injectable()
export class OrderService {
    constructor(
        @InjectRepository(Order)
        private orderRepository: Repository<Order>
    ) {}

    async create(orderData: Order): Promise<any> {
        return await this.orderRepository.save(orderData);
    }
}
