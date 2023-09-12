// src/order/order.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, ManyToMany } from 'typeorm';
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

  @ManyToMany(() => Product, (product) => product.orders)
  @Field(() => Product)
  @JoinColumn({ name: 'productId' })
  product: Product;

}
