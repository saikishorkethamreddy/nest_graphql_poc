import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, SelectQueryBuilder } from 'typeorm';
import { Order } from './order.entity';
import { OrderInput } from './order.input';
import { CustomerService } from '../customer/customer.service';
import { ProductService } from '../product/product.service';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
    private readonly customerService: CustomerService,
    private readonly productService: ProductService,
  ) {}

    async findByIdWithRelations(ordID: number): Promise<Order | undefined> {
        return this.orderRepository
        .createQueryBuilder('order')
        .leftJoinAndSelect('order.customer', 'customer')
        .leftJoinAndSelect('order.product', 'product')
        .where('order.ordID = :ordID', { ordID })
        .getOne();
    }

  async create(input: OrderInput): Promise<Order> {
    const { orderedQty, customerId, productId } = input;

    // Check if the customer exists
    const customer = await this.customerService.findById(customerId);
    if (!customer) {
      throw new NotFoundException('Customer not found.');
    }

    // Check if the product exists
    const product = await this.productService.findById(productId);
    if (!product) {
      throw new NotFoundException('Product not found.');
    }

    const order = new Order();
    order.orderedQty = orderedQty;
    order.customer = customer;
    order.product = product;

    return this.orderRepository.save(order);
  }
}
