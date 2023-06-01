/* eslint-disable */
import { Metadata } from '@grpc/grpc-js';
import { GrpcMethod, GrpcStreamMethod } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { Orders } from './orders.pb';

export const protobufPackage = 'users';

export interface GetUserRequest {
  id: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  orders?: Orders | undefined;
}

export const USERS_PACKAGE_NAME = 'users';

export interface UsersServiceClient {
  getUser(request: GetUserRequest, metadata?: Metadata): Observable<User>;
}

export interface UsersServiceController {
  getUser(
    request: GetUserRequest,
    metadata?: Metadata
  ): Promise<User> | Observable<User> | User;
}

export function UsersServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ['getUser'];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(
        constructor.prototype,
        method
      );
      GrpcMethod('UsersService', method)(
        constructor.prototype[method],
        method,
        descriptor
      );
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(
        constructor.prototype,
        method
      );
      GrpcStreamMethod('UsersService', method)(
        constructor.prototype[method],
        method,
        descriptor
      );
    }
  };
}

export const USERS_SERVICE_NAME = 'UsersService';
