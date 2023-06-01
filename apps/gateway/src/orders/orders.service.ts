import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';

import { Orders } from '@not-a-real-shop/rpc';

@Injectable()
export class OrdersService implements OnModuleInit {
  private ordersRpcService: Orders.OrdersServiceClient;

  constructor(@Inject(Orders.ORDERS_PACKAGE_NAME) private client: ClientGrpc) {}

  onModuleInit() {
    this.ordersRpcService = this.client.getService<Orders.OrdersServiceClient>(
      Orders.ORDERS_SERVICE_NAME
    );
  }

  getAllOrders() {
    return this.ordersRpcService.getAllOrders({});
  }

  getOrder(id: string) {
    return this.ordersRpcService.getOrder({ id });
  }

  getUserOrders(userId: string) {
    return this.ordersRpcService.getUserOrders({ userId });
  }
}
