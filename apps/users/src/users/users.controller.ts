import { Metadata } from '@grpc/grpc-js';
import { Controller, Logger } from '@nestjs/common';
import { Observable } from 'rxjs';

import { Users } from '@not-a-real-shop/rpc';

@Controller()
@Users.UsersServiceControllerMethods()
export class UsersController implements Users.UsersServiceController {
  getUser(
    request: Users.GetUserRequest,
    metadata?: Metadata
  ): Users.User | Promise<Users.User> | Observable<Users.User> {
    Logger.debug('getUser', request, metadata);

    return {} as Users.User;
  }
}
