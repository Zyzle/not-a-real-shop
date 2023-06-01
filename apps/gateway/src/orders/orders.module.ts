import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

import { Orders } from '@not-a-real-shop/rpc';

import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: Orders.ORDERS_PACKAGE_NAME,
        transport: Transport.GRPC,
        options: {
          url: `localhost:${process.env.ORDERS_PORT}`,
          package: Orders.ORDERS_PACKAGE_NAME,
          protoPath: './proto/orders.proto',
        },
      },
    ]),
  ],
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class OrdersModule {}
