import { Injectable } from '@nestjs/common';
import { Repository, FindOneOptions } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User, Order } from '../tables.entity';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
        private readonly jwtService: JwtService
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

    async login(userData: User): Promise<any> {
        const options: FindOneOptions<User> = {
            where: { email: userData.email },
            select: ["password"]
        }
        
        const user = await this.userRepository.findOne(options);

        if (!user) {
            return { message: 'User does not exists' };
        }
    
        const isValidPassword = await bcrypt.compare(userData.password, user.password);

        if (!isValidPassword) { 
            return { message: 'Wrong Password'};
        } else {
            const payload = { email: user.email, sub: user.id };
            const token = this.jwtService.sign(payload);
            return { message: 'logged in successfully', token: token}
        }
    }
    
}
