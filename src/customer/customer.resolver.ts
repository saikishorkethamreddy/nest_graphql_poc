import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { Customer } from './customer.entity';
import { CustomerService } from './customer.service';
import { CustomerInput } from './customer.input';


@Resolver((of) => Customer)
export class CustomerResolver {
    constructor(private customerService: CustomerService) {}
    
    @Query((type) => [Customer])
    async getAllCustomers() {
        return this.customerService.getAll();
    }
    @Mutation(() => Customer)
    async createCustomer(@Args('input') input: CustomerInput): Promise<Customer> {
        return this.customerService.create(input);
      }

}
