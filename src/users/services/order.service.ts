import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository, FindOneOptions } from 'typeorm';
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

    async  findAll(): Promise<any[]> {
        return await this.orderRepository.find();
    }

    async findOne(id: number): Promise<Order> {
        const options: FindOneOptions = { where: { id: id }};
        const record = await this.orderRepository.findOne(options);
        if (!record) {
            throw new NotFoundException('Record not found');
        }
        return record;
    }

    async updateOrder(id: number, orderData: Order): Promise<Order> {
        const options: FindOneOptions = { where: { id: id }};
        const order = await this.orderRepository.findOne(options);
        if (!order) {
            throw new NotFoundException(`Order with ID ${id} not found`);
        }
        orderData.id = id;
        await this.orderRepository.update(order.id, orderData);
        return orderData;
    }

    async deleteOrder(id: number): Promise<void> {
        const result = await this.orderRepository.delete(id);
        if(!result.affected) throw new NotFoundException(`Order with ID ${id} not found`);
    }
}
