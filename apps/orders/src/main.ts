import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        package: 'orders',
        protoPath: './proto/orders.proto',
      },
    }
  );
  await app.listen();
  Logger.log(`🚀 Orders is running`);
}

bootstrap();
