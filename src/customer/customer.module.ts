import { Module } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customer } from './customer.entity';
import { CustomerResolver } from './customer.resolver';
import { AddressModule } from 'src/address/address.module';

@Module({
  providers: [CustomerService, CustomerResolver],
  imports: [TypeOrmModule.forFeature([Customer]),
  AddressModule]
})
export class CustomerModule {}
