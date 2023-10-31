import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { BaseService } from "../base.service";

@Injectable()
export class AuthUsersService extends BaseService<AuthUsers> {
  constructor(
    @InjectRepository(AuthUsers)
    private auth_usersRepository : Repository<AuthUsers>
  ) {
    super(auth_usersRepository);
  }
}