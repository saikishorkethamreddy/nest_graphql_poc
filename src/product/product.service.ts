// src/product/product.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';
import { ProductInput } from './product.input';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async create(input: ProductInput): Promise<Product> {
    const product = new Product();
    product.description = input.description;
    product.unitPrice = input.unitPrice;
    product.availableQty = input.availableQty;

    return this.productRepository.save(product);
  }

  async findById(pId: number): Promise<Product | null> {
    return
    //return this.productRepository.findOne(pId);
  }
}
