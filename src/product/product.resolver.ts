import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { ProductService } from './product.service';
import { ProductInput } from './product.input';
import { Product } from './product.entity';

@Resolver('Product')
export class ProductResolver {
  constructor(private readonly productService: ProductService) {}

  @Mutation(() => Product)
  async createProduct(@Args('input') input: ProductInput): Promise<Product> {
    return this.productService.create(input);
  }

  @Query(() => Product, { nullable: true })
  async getProductById(@Args('pId') pId: number): Promise<Product | null> {
    return this.productService.findById(pId);
  }
}
