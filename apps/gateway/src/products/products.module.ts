import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

import { Products } from '@not-a-real-shop/rpc';

import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: Products.PRODUCTS_PACKAGE_NAME,
        transport: Transport.GRPC,
        options: {
          package: Products.PRODUCTS_PACKAGE_NAME,
          protoPath: './proto/products.proto',
        },
      },
    ]),
  ],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
