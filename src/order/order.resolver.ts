import { Resolver, Mutation, Args, Query, Int, ResolveField, Parent } from '@nestjs/graphql';
import { OrderService } from './order.service';
import { OrderInput } from './order.input';
import { Order } from './order.entity';
import { ProductService } from 'src/product/product.service';

@Resolver('Order')
export class OrderResolver {
  constructor(
    private readonly orderService: OrderService,
    private readonly productService: ProductService
    ) {}

  @Mutation(() => Order)
  async createOrder(@Args('input') input: OrderInput): Promise<Order> {
    return this.orderService.create(input);
  }

  @Query(() => Order, { name: 'getOrderById' })
  async getOrderById(@Args('ordID', { type: () => Int }) ordID: number): Promise<Order> {
    return this.orderService.findByIdWithRelations(ordID);
  }

  @Query(() => [Order])
  async findOrdersByProductId(@Args('prodId', { type: () => Int }) prodId: number) {
    const orders = await this.orderService.findOrdersByProductId(prodId);
    if (Array.isArray(orders) && orders.length > 0) {
      return orders;
    } else {
      throw new Error(`No orders found for product with ID ${prodId}`);
    }
  }
}
