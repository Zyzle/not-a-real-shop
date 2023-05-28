import { Metadata } from '@grpc/grpc-js';
import { Controller } from '@nestjs/common';
import { Observable } from 'rxjs';

import { Products } from '@not-a-real-shop/rpc';

@Controller()
@Products.ProductsServiceControllerMethods()
export class ProductController implements Products.ProductsServiceController {
  getProducts(
    request: Products.GetProductsRequest,
    metadata?: Metadata
  ):
    | Products.Products
    | Promise<Products.Products>
    | Observable<Products.Products> {
    return {
      products: [],
    };
  }

  getProduct(
    request: Products.GetProductRequest,
    metadata?: Metadata
  ):
    | Products.Product
    | Promise<Products.Product>
    | Observable<Products.Product> {
    return {
      id: request.id,
      name: 'Product 2',
      price: 1000,
    };
  }
}
