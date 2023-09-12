import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository  } from 'typeorm';
import { Customer } from './customer.entity';
import { CustomerInput } from './customer.input';
import { Address } from 'src/address/address.entity';

@Injectable()
export class CustomerService {
    constructor(
        @InjectRepository(Customer)
        private customerRepository: Repository<Customer>,
        @InjectRepository(Address)
        private readonly addressRepository: Repository<Address>,
    ) {}

    async getAll(): Promise<Customer[]> {
      return await this.customerRepository.find();
    }

    async create(input: CustomerInput): Promise<Customer> {
      // Create a new Address entity
      const address = new Address();
      address.addrLine1 = input.address.addrLine1;
      address.addrLine2 = input.address.addrLine2;
      address.city = input.address.city;
      address.postcode = input.address.postcode;
      address.country = input.address.country;
  
      // Save the address to the database
      await this.addressRepository.save(address);
  
      // Create a new Customer entity with address
      const customer = new Customer();
      customer.firstName = input.firstName;
      customer.lastName = input.lastName;
      customer.email = input.email;
      customer.tel = input.tel;
      customer.address = address;
  
      // Save the customer to the database
      return this.customerRepository.save(customer);
    }
    
}
