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
        url: `localhost:${process.env.USERS_PORT}`,
        package: 'users',
        protoPath: './proto/users.proto',
      },
    }
  );
  await app.listen();
  Logger.log(`🚀 Users is running`);
}

bootstrap();
