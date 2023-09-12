import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { Field, Int, ObjectType } from '@nestjs/graphql';


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
}
