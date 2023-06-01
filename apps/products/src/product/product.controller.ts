import { Metadata } from '@grpc/grpc-js';
import { Controller, Logger } from '@nestjs/common';
import { Observable } from 'rxjs';

import { Products } from '@not-a-real-shop/rpc';

@Controller()
@Products.ProductsServiceControllerMethods()
export class ProductController implements Products.ProductsServiceController {
  reserveStock(
    request: Products.StockReservationRequest,
    metadata?: Metadata
  ):
    | Products.StockReservation
    | Promise<Products.StockReservation>
    | Observable<Products.StockReservation> {
    Logger.debug('reserveStock', request, metadata);

    return {} as Products.StockReservation;
  }

  releaseStock(
    request: Products.StockReservationRequest,
    metadata?: Metadata
  ):
    | Products.StockReservation
    | Promise<Products.StockReservation>
    | Observable<Products.StockReservation> {
    Logger.debug('releaseStock', request, metadata);

    return {} as Products.StockReservation;
  }

  getProducts(
    request: Products.GetProductsRequest,
    metadata?: Metadata
  ):
    | Products.Products
    | Promise<Products.Products>
    | Observable<Products.Products> {
    Logger.debug('getProducts', request, metadata);

    return {} as Products.Products;
  }

  getProduct(
    request: Products.GetProductRequest,
    metadata?: Metadata
  ):
    | Products.Product
    | Promise<Products.Product>
    | Observable<Products.Product> {
    Logger.debug('getProduct', request, metadata);

    return {} as Products.Product;
  }
}
