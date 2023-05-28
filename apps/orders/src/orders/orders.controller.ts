import { Controller } from '@nestjs/common';

import { Orders } from '@not-a-real-shop/rpc';

@Controller()
@Orders.OrdersServiceControllerMethods()
export class OrdersController implements Orders.OrdersServiceController {}
