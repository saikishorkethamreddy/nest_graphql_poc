import { InputType, Field } from '@nestjs/graphql';
import { AddressInput } from 'src/address/address.input';

@InputType()
export class ProductInput {
    @Field()
    description: string;

    @Field()
    unitPrice: number;

    @Field()
    availableQty: number;
}
