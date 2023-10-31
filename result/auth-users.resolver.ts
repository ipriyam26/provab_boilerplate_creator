import { Resolver } from "@nestjs/graphql";
import { BaseResolver } from "../base.resolver";


@Resolver((of) => AuthUsers)
export class AuthUsersResolver extends BaseResolver(
  AuthUsers,
  AuthUsersService,
  AuthUsersPartial,
  AuthUsersFilter
) {
  constructor(
    private readonly AuthUsersService: AuthUsersService
  ) {
    super(AuthUsersService);
  }
}