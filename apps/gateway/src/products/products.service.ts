import { Inject, Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';

import { Products } from '@not-a-real-shop/rpc';

@Injectable()
export class ProductsService implements OnModuleInit {
  private productsRpcService: Products.ProductsServiceClient;

  constructor(
    @Inject(Products.PRODUCTS_PACKAGE_NAME) private client: ClientGrpc
  ) {}

  onModuleInit() {
    this.productsRpcService =
      this.client.getService<Products.ProductsServiceClient>(
        Products.PRODUCTS_SERVICE_NAME
      );
  }

  getProduct(id: string) {
    return this.productsRpcService.getProduct({ id });
  }

  getProducts() {
    Logger.debug('Getting products');
    return this.productsRpcService.getProducts({});
  }

  reserveStock(productId: string, quantity: number, cartItemId: string) {
    return this.productsRpcService.reserveStock({
      productId,
      quantity,
      cartItemId,
    });
  }

  releaseStock(productId: string, quantity: number, cartItemId: string) {
    return this.productsRpcService.releaseStock({
      productId,
      quantity,
      cartItemId,
    });
  }
}
