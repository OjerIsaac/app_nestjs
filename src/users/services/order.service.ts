import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Order, User } from '../tables.entity';

@Injectable()
export class OrderService {
    constructor(
        @InjectRepository(Order)
        private orderRepository: Repository<Order>,
        @InjectRepository(User)
        private userRepository: Repository<User>
    ) {}

    async create(id: number, orderData: Order): Promise<any> {
        const user = await this.userRepository.findOne({ where: { id: id }, select: ["id"] });
        orderData.user = user;
        console.log(orderData);  
        return await this.orderRepository.save(orderData);
    }
}
