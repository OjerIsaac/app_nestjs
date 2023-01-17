import { Module } from '@nestjs/common';
import { UserService } from './services/user.service';
import { UserController } from './controllers/user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User, Order } from './tables.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
    imports: [
        TypeOrmModule.forFeature([User, Order]),
        JwtModule.register({ secret: 'secretKey' })
    ],
  providers: [UserService],
  controllers: [UserController]
})
export class UsersModule {}
