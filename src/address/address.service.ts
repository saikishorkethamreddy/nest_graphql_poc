import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Address } from './address.entity';
import { AddressInput } from './address.input';

@Injectable()

export class AddressService {
    constructor(
        @InjectRepository(Address)
        private addressRepository: Repository<Address>,
      ) {}
    async getAll(): Promise<Address[]> {
        return await this.addressRepository.find();
    }
    async createAddress(AddressInput: AddressInput): Promise<Address> {
        const newAddress = this.addressRepository.create(AddressInput);
    
        return this.addressRepository.save(newAddress);
      }
}
