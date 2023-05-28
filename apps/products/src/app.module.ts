import { Module } from '@nestjs/common';

import { ProductController } from './product/product.controller';

@Module({
  imports: [],
  controllers: [ProductController],
  providers: [],
})
export class AppModule {}
