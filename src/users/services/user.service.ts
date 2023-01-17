import { Injectable } from '@nestjs/common';
import { Repository, FindOneOptions } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User, Order } from '../tables.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) { }

    async register(userData: User): Promise<any> {
        const options: FindOneOptions<User> = {
            where: { email: userData.email }
        }
        
        const existingUser = await this.userRepository.findOne(options);
        if (existingUser) {
            return { message: 'User already exists' };
        }

        const salt = await bcrypt.genSalt();
        userData.password = await bcrypt.hash(userData.password, salt);

        const newUser = await this.userRepository.save(userData);
        return { message: 'User created' };
        // return { message: 'User created', user: newUser };
    }
}
