// src/order/order.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Customer } from '../customer/customer.entity';
import { Product } from '../product/product.entity';
import { Field, Int, ObjectType } from '@nestjs/graphql';

@Entity()
@ObjectType()
export class Order {
  @PrimaryGeneratedColumn()
  @Field()
  ordID: number;

  @Column({ type: 'text', default: () => 'CURRENT_TIMESTAMP' })
  @Field()
  dateOrdered: string;

  @Column('int')
  @Field()
  orderedQty: number;

  @ManyToOne(() => Customer, (customer) => customer.orders)
  @JoinColumn({ name: 'customerId' }) 
  customer: Customer;

  @ManyToOne(() => Product, (product) => product.orders)
  @JoinColumn({ name: 'productId' })
  product: Product;
}
