import { Module } from '@nestjs/common';
import { UserService } from './services/user.service';
import { UserController } from './controllers/user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User, Order } from './tables.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([User, Order]),
    ],
  providers: [UserService],
  controllers: [UserController]
})
export class UsersModule {}
