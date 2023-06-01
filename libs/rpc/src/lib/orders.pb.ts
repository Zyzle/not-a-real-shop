/* eslint-disable */
import { Metadata } from '@grpc/grpc-js';
import { GrpcMethod, GrpcStreamMethod } from '@nestjs/microservices';
import { Observable } from 'rxjs';

export const protobufPackage = 'orders';

export interface GetAllOrdersRequest {}

export interface GetOrderRequest {
  id: string;
}

export interface GetUserOrdersRequest {
  userId: string;
}

export interface Orders {
  orders: Order[];
}

export interface Order {
  id: string;
  userId: string;
  productId: string;
  quantity: number;
  items: OrderItem[];
}

export interface OrderItem {
  id: string;
  productId: string;
  quantity: number;
}

export const ORDERS_PACKAGE_NAME = 'orders';

export interface OrdersServiceClient {
  getAllOrders(
    request: GetAllOrdersRequest,
    metadata?: Metadata
  ): Observable<Orders>;

  getOrder(request: GetOrderRequest, metadata?: Metadata): Observable<Order>;

  getUserOrders(
    request: GetUserOrdersRequest,
    metadata?: Metadata
  ): Observable<Orders>;
}

export interface OrdersServiceController {
  getAllOrders(
    request: GetAllOrdersRequest,
    metadata?: Metadata
  ): Promise<Orders> | Observable<Orders> | Orders;

  getOrder(
    request: GetOrderRequest,
    metadata?: Metadata
  ): Promise<Order> | Observable<Order> | Order;

  getUserOrders(
    request: GetUserOrdersRequest,
    metadata?: Metadata
  ): Promise<Orders> | Observable<Orders> | Orders;
}

export function OrdersServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ['getAllOrders', 'getOrder', 'getUserOrders'];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(
        constructor.prototype,
        method
      );
      GrpcMethod('OrdersService', method)(
        constructor.prototype[method],
        method,
        descriptor
      );
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(
        constructor.prototype,
        method
      );
      GrpcStreamMethod('OrdersService', method)(
        constructor.prototype[method],
        method,
        descriptor
      );
    }
  };
}

export const ORDERS_SERVICE_NAME = 'OrdersService';
