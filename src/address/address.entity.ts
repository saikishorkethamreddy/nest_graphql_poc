import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Field, Int, ObjectType } from '@nestjs/graphql';


@Entity()
@ObjectType()
export class Address {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  addrNo: number;

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
}
