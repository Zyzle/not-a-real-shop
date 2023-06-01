import { Test, TestingModule } from '@nestjs/testing';
import { ClientGrpc } from '@nestjs/microservices';
import { createMock } from '@golevelup/ts-jest';

import { Users } from '@not-a-real-shop/rpc';

import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: Users.USERS_PACKAGE_NAME,
          useValue:
            createMock<ClientGrpc>().getService<Users.UsersServiceClient>(
              Users.USERS_SERVICE_NAME
            ),
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
