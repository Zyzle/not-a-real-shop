import { Body, Controller, Get, Param, Post } from '@nestjs/common';

import { ProductsService } from './products.service';
import { ReserveStockDto } from './products.dto';
import { ApiBody } from '@nestjs/swagger';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  getProducts() {
    return this.productsService.getProducts();
  }

  @Get(':id')
  getProduct(@Param('id') id: string) {
    return this.productsService.getProduct(id);
  }

  @Post(':id/reserve')
  @ApiBody({ type: ReserveStockDto })
  reserveStock(@Param('id') productId: string, @Body() body: ReserveStockDto) {
    return this.productsService.reserveStock(
      productId,
      body.quantity,
      body.cartItemId
    );
  }

  @Post(':id/release')
  @ApiBody({ type: ReserveStockDto })
  releaseStock(@Param('id') productId: string, @Body() body: ReserveStockDto) {
    return this.productsService.releaseStock(
      productId,
      body.quantity,
      body.cartItemId
    );
  }
}
