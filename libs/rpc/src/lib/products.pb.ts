/* eslint-disable */
import { Metadata } from '@grpc/grpc-js';
import { GrpcMethod, GrpcStreamMethod } from '@nestjs/microservices';
import { Observable } from 'rxjs';

export const protobufPackage = 'products';

export interface GetProductRequest {
  id: string;
}

export interface GetProductsRequest {}

export interface StockReservationRequest {
  productId: string;
  quantity: number;
  cartItemId: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  stock: number;
  description: string;
  imageUrl: string;
}

export interface Products {
  products: Product[];
}

export interface StockReservation {
  id: string;
  productId: string;
  quantity: number;
  cartItemId: string;
}

export const PRODUCTS_PACKAGE_NAME = 'products';

export interface ProductsServiceClient {
  getProduct(
    request: GetProductRequest,
    metadata?: Metadata
  ): Observable<Product>;

  getProducts(
    request: GetProductsRequest,
    metadata?: Metadata
  ): Observable<Products>;

  reserveStock(
    request: StockReservationRequest,
    metadata?: Metadata
  ): Observable<StockReservation>;

  releaseStock(
    request: StockReservationRequest,
    metadata?: Metadata
  ): Observable<StockReservation>;
}

export interface ProductsServiceController {
  getProduct(
    request: GetProductRequest,
    metadata?: Metadata
  ): Promise<Product> | Observable<Product> | Product;

  getProducts(
    request: GetProductsRequest,
    metadata?: Metadata
  ): Promise<Products> | Observable<Products> | Products;

  reserveStock(
    request: StockReservationRequest,
    metadata?: Metadata
  ):
    | Promise<StockReservation>
    | Observable<StockReservation>
    | StockReservation;

  releaseStock(
    request: StockReservationRequest,
    metadata?: Metadata
  ):
    | Promise<StockReservation>
    | Observable<StockReservation>
    | StockReservation;
}

export function ProductsServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = [
      'getProduct',
      'getProducts',
      'reserveStock',
      'releaseStock',
    ];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(
        constructor.prototype,
        method
      );
      GrpcMethod('ProductsService', method)(
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
      GrpcStreamMethod('ProductsService', method)(
        constructor.prototype[method],
        method,
        descriptor
      );
    }
  };
}

export const PRODUCTS_SERVICE_NAME = 'ProductsService';
