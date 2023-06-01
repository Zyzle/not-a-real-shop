import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';

import { Users } from '@not-a-real-shop/rpc';

@Injectable()
export class UsersService implements OnModuleInit {
  private usersRpcService: Users.UsersServiceClient;

  constructor(@Inject(Users.USERS_PACKAGE_NAME) private client: ClientGrpc) {}

  onModuleInit() {
    this.usersRpcService = this.client.getService<Users.UsersServiceClient>(
      Users.USERS_SERVICE_NAME
    );
  }

  getUser(id: string) {
    return this.usersRpcService.getUser({ id });
  }
}
