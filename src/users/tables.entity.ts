import { Entity, Column, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    email: string;

    @Column()
    phone: string;

    @Column()
    city: string;

    @Column()
    country: string;

    @OneToMany(type => Order, order => order.user)
    children: Order[];
}

@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    orderName: string;

    @Column()
    price: string;

    @ManyToOne(type => User, user => user.children)
    user: User;
}