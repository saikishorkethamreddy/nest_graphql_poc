import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductResolver } from './product.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './product.entity';

@Module({
  providers: [ProductService, ProductResolver],
  imports: [
    TypeOrmModule.forFeature([Product]),
    ProductModule
  ]
})
export class ProductModule {}
