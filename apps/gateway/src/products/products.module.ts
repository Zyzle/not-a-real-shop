import { Module } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { ClientsModule, Transport } from '@nestjs/microservices';

import { Products } from '@not-a-real-shop/rpc';

import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { ZodValidationPipe } from 'nestjs-zod';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: Products.PRODUCTS_PACKAGE_NAME,
        transport: Transport.GRPC,
        options: {
          url: `localhost:${process.env.PRODUCTS_PORT}`,
          package: Products.PRODUCTS_PACKAGE_NAME,
          protoPath: './proto/products.proto',
        },
      },
    ]),
  ],
  controllers: [ProductsController],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ZodValidationPipe,
    },
    ProductsService,
  ],
})
export class ProductsModule {}
