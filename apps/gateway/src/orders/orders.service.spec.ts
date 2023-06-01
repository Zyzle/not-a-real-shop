import { Test, TestingModule } from '@nestjs/testing';
import { ClientGrpc } from '@nestjs/microservices';
import { createMock } from '@golevelup/ts-jest';

import { Orders } from '@not-a-real-shop/rpc';

import { OrdersService } from './orders.service';

describe('OrdersService', () => {
  let service: OrdersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        OrdersService,
        {
          provide: Orders.ORDERS_PACKAGE_NAME,
          useValue:
            createMock<ClientGrpc>().getService<Orders.OrdersServiceClient>(
              Orders.ORDERS_SERVICE_NAME
            ),
        },
      ],
    }).compile();

    service = module.get<OrdersService>(OrdersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
