import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { Address } from './address.entity';
import { AddressService } from './address.service';
import { AddressInput } from './address.input';

@Resolver((of) => Address)
export class AddressResolver {
    constructor(private addressService: AddressService) {}
    
    @Query((type) => [Address])
    async getAllAddress() {
        return this.addressService.getAll();
    }

    @Mutation((returns) => Address)
    createAddress(@Args('addressInput') addressInput: AddressInput): Promise<Address> {
        return this.addressService.createAddress(addressInput);
    }
}
