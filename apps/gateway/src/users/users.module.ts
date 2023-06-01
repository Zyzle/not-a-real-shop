import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

import { Users } from '@not-a-real-shop/rpc';

import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: Users.USERS_PACKAGE_NAME,
        transport: Transport.GRPC,
        options: {
          url: `localhost:${process.env.USERS_PORT}`,
          package: Users.USERS_PACKAGE_NAME,
          protoPath: './proto/users.proto',
        },
      },
    ]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
