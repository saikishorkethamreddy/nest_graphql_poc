import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { Field, Int, ObjectType, ID } from '@nestjs/graphql';
import { Customer } from 'src/customer/customer.entity';


@Entity()
@ObjectType()
export class Address {
  @PrimaryGeneratedColumn()
  @Field(() => ID, { nullable: true }) // Make addrNo nullable
  addrNo?: string;

  @Column()
  @Field()
  addrLine1: string;

  @Column()
  @Field()
  addrLine2: string;

  @Column()
  @Field()
  city: string;

  @Column()
  @Field()
  postcode: string;

  @Column()
  @Field()
  country: string;

  @OneToOne(() => Customer, (customer) => customer.address)
  @Field()
  customer: Customer;
}
