import { Test, TestingModule } from '@nestjs/testing';
import { ClientGrpc } from '@nestjs/microservices';
import { createMock } from '@golevelup/ts-jest';

import { Products } from '@not-a-real-shop/rpc';

import { ProductsService } from './products.service';

describe('ProductsService', () => {
  let service: ProductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProductsService,
        {
          provide: Products.PRODUCTS_PACKAGE_NAME,
          useValue:
            createMock<ClientGrpc>().getService<Products.ProductsServiceClient>(
              Products.PRODUCTS_SERVICE_NAME
            ),
        },
      ],
    }).compile();

    service = module.get<ProductsService>(ProductsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
