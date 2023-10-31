import { ExecutionContext } from "@nestjs/common";
import Dataloader from "dataloader";
import gql from "graphql-tag";
import { manyToManyV3 } from "../base.loader";

export const authUsersLoader = (ctx: ExecutionContext) => {
  return new Dataloader(async (keys: number[]) => {
    const gqlQuery = gql`
      ${ctx["body"]["query"]}
    `;
    return await manyToManyV3(
      keys,
      gqlQuery,
      "authUser",
      "auth_users",
      "auth_role_id"
    );
  });
};