import { Test, TestingModule } from '@nestjs/testing';
import { createMock } from '@golevelup/ts-jest';

import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';

describe('ProductsController', () => {
  let controller: ProductsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: ProductsService,
          useValue: createMock<ProductsService>(),
        },
      ],
      controllers: [ProductsController],
    }).compile();

    controller = module.get<ProductsController>(ProductsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
