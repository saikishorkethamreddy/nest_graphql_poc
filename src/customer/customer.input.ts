import { InputType, Field } from '@nestjs/graphql';
import { AddressInput } from 'src/address/address.input';

@InputType()
export class CustomerInput {
  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  email: string;

  @Field()
  tel: string;

  @Field(() => AddressInput, { nullable: true }) 
  address: AddressInput;
}
