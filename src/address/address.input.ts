import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class AddressInput {
  @Field()
  addrLine1: string;

  @Field({ nullable: true })
  addrLine2?: string;

  @Field()
  city: string;

  @Field()
  postcode: string;

  @Field()
  country: string;
}
