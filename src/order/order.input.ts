import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class OrderInput {
  @Field()
  dateOrdered: Date;

  @Field()
  orderedQty: number;
   
  @Field()
  customerId: number;

  @Field()
  productId: number;
}
