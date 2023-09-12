import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, OneToMany } from 'typeorm';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Address } from 'src/address/address.entity';
import { Order } from 'src/order/order.entity';


@Entity()
@ObjectType()
export class Customer {
  @PrimaryGeneratedColumn()
  @Field()
  custID: number;

  @Column()
  @Field()
  firstName: string;

  @Column()
  @Field()
  lastName: string;

  @Column()
  @Field()
  email: string;

  @Column()
  @Field()
  tel: string;

  @OneToOne(() => Address, (address) => address.customer)
  @JoinColumn()
  address: Address;

  @OneToMany(() => Order, (order) => order.customer)
  @JoinColumn()
  orders: Order[];
}
