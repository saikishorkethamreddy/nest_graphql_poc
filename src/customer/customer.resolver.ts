import { Args, Int, Mutation, Query, Resolver } from "@nestjs/graphql";
import { Customer } from './customer.entity';
import { CustomerService } from './customer.service';
import { CustomerInput } from './customer.input';
import { isNumberObject } from "util/types";


@Resolver((of) => Customer)
export class CustomerResolver {
    constructor(private customerService: CustomerService) {}
    
    @Query((type) => [Customer])
    async getAllCustomers() {
        return this.customerService.getAll();
    }

    @Query((type) => Customer, { nullable: true })
    async getCustomerById(@Args('custID', { type: () => Int }) custID: number): Promise<Customer | null> {
        return this.customerService.findById(custID);
      }
    @Mutation(() => Customer)
    async createCustomer(@Args('input') input: CustomerInput): Promise<Customer> {
        return this.customerService.create(input);
      }

}
