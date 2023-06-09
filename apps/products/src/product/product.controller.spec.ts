import { Test, TestingModule } from '@nestjs/testing';
import { ProductController } from './product.controller';

describe('ProductController', () => {
  let controller: ProductController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductController],
    }).compile();

    controller = module.get<ProductController>(ProductController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return products', () => {
    expect(controller.getProducts({})).toEqual({});
  });

  it('should return product', () => {
    expect(controller.getProduct({ id: '1' })).toEqual({});
  });
});
