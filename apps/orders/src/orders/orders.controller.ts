import { Metadata } from '@grpc/grpc-js';
import { Controller, Logger } from '@nestjs/common';
import { Observable } from 'rxjs';

import { Orders } from '@not-a-real-shop/rpc';

@Controller()
@Orders.OrdersServiceControllerMethods()
export class OrdersController implements Orders.OrdersServiceController {
  getAllOrders(
    request: Orders.GetAllOrdersRequest,
    metadata?: Metadata
  ): Orders.Orders | Promise<Orders.Orders> | Observable<Orders.Orders> {
    Logger.debug('getAllOrders', request, metadata);

    return {} as Orders.Orders;
  }
  getOrder(
    request: Orders.GetOrderRequest,
    metadata?: Metadata
  ): Orders.Order | Promise<Orders.Order> | Observable<Orders.Order> {
    Logger.debug('getOrder', request, metadata);

    return {} as Orders.Order;
  }
  getUserOrders(
    request: Orders.GetUserOrdersRequest,
    metadata?: Metadata
  ): Orders.Orders | Promise<Orders.Orders> | Observable<Orders.Orders> {
    Logger.debug('getUserOrders', request, metadata);

    return {} as Orders.Orders;
  }
}
