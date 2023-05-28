import { Controller } from '@nestjs/common';

import { Users } from '@not-a-real-shop/rpc';

@Controller()
@Users.UsersServiceControllerMethods()
export class UsersController implements Users.UsersServiceController {}
