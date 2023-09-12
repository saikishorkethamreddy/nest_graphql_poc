import { Resolver, Mutation, Args, Query, Int, ResolveField, Parent } from '@nestjs/graphql';
import { OrderService } from './order.service';
import { OrderInput } from './order.input';
import { Order } from './order.entity';
import { Customer } from 'src/customer/customer.entity';
import { CustomerService } from 'src/customer/customer.service';

@Resolver('Order')
export class OrderResolver {
  constructor(private readonly orderService: OrderService,
    private readonly customerService: CustomerService,) {}

  @Mutation(() => Order)
  async createOrder(@Args('input') input: OrderInput): Promise<Order> {
    return this.orderService.create(input);
  }

  @Query(() => Order, { name: 'getOrderById' })
  async getOrderById(@Args('ordID', { type: () => Int }) ordID: number): Promise<Order> {
    return this.orderService.findByIdWithRelations(ordID);
  }
}
