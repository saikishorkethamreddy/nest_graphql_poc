import { InputType, Field, ID  } from '@nestjs/graphql';

@InputType()
export class AddressInput {
  @Field(() => ID, { nullable: true }) // Make addrNo nullable
  addrNo?: string;
  
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
