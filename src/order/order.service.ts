import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './order.entity';
import { OrderInput } from './order.input';
import { CustomerService } from '../customer/customer.service';
import { ProductService } from '../product/product.service';
import { Args, Int } from '@nestjs/graphql';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private  orderRepository: Repository<Order>,
    private  customerService: CustomerService,
    private  productService: ProductService,
  ) {}

    async findByIdWithRelations(ordID: number): Promise<Order | undefined> {
        return this.orderRepository
        .createQueryBuilder('order')
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

  
  async findOrdersByProductId(prodId: number): Promise<Order[]> {
    const product = await this.productService.findById(prodId);

    if (!product) {
      throw new Error(`Product with ID ${prodId} not found.`);
    }
    console.log ("Product Input" + prodId);
    // Find all orders associated with the product
    try {
        const orders = await this.orderRepository.find({
          where: { product: { pId: prodId } },
        });
        return orders;
      } catch (error) {
       
        console.error('Error fetching orders:', error);
        throw new Error('Failed to fetch orders.');
      }

  }
}
