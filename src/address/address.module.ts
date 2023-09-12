import { Module } from '@nestjs/common';
import { AddressService } from './address.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Address } from './address.entity';
import { AddressResolver } from './address.resolver';

@Module({
  providers: [AddressService, AddressResolver],
  imports: [TypeOrmModule.forFeature([Address])],
  exports: [TypeOrmModule],
})
export class AddressModule {}
