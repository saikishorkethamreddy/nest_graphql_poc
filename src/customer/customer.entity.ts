import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Address } from 'src/address/address.entity';


@Entity()
@ObjectType()
export class Customer {
  @PrimaryGeneratedColumn()
  @Field()
  custID: string;

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
}
