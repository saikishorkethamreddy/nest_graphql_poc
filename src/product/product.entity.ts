import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, OneToMany } from 'typeorm';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Order } from 'src/order/order.entity';


@Entity()
@ObjectType()
export class Product {
  @PrimaryGeneratedColumn()
  @Field()
  pId: number;

  @Column()
  @Field()
  description: string;

  @Column('decimal', { precision: 10, scale: 2 })
  @Field()
  unitPrice: number;

  @Column()
  @Field()
  availableQty: number;

  @OneToMany(() => Order, (order) => order.product)
  orders: Order[];
}
