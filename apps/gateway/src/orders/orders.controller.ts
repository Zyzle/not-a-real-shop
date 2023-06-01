import { Controller, Get, Param } from '@nestjs/common';

import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private ordersService: OrdersService) {}

  @Get()
  getAllOrders() {
    return this.ordersService.getAllOrders();
  }

  @Get(':id')
  getOrder(@Param('id') id: string) {
    return this.ordersService.getOrder(id);
  }

  @Get('user/:userId')
  getUserOrders(@Param('userId') userId: string) {
    return this.ordersService.getUserOrders(userId);
  }
}
