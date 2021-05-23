import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import * as gqlBasicAuthGuard from "../../auth/gqlBasicAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import * as gqlUserRoles from "../../auth/gqlUserRoles.decorator";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { CreateDphArgs } from "./CreateDphArgs";
import { UpdateDphArgs } from "./UpdateDphArgs";
import { DeleteDphArgs } from "./DeleteDphArgs";
import { DphFindManyArgs } from "./DphFindManyArgs";
import { DphFindUniqueArgs } from "./DphFindUniqueArgs";
import { Dph } from "./Dph";
import { OrderFindManyArgs } from "../../order/base/OrderFindManyArgs";
import { Order } from "../../order/base/Order";
import { DphService } from "../dph.service";

@graphql.Resolver(() => Dph)
@common.UseGuards(gqlBasicAuthGuard.GqlBasicAuthGuard, gqlACGuard.GqlACGuard)
export class DphResolverBase {
  constructor(
    protected readonly service: DphService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Dph",
    action: "read",
    possession: "any",
  })
  async _dphsMeta(
    @graphql.Args() args: DphFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @graphql.Query(() => [Dph])
  @nestAccessControl.UseRoles({
    resource: "Dph",
    action: "read",
    possession: "any",
  })
  async dphs(
    @graphql.Args() args: DphFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Dph[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Dph",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => Dph, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Dph",
    action: "read",
    possession: "own",
  })
  async dph(
    @graphql.Args() args: DphFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Dph | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Dph",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => Dph)
  @nestAccessControl.UseRoles({
    resource: "Dph",
    action: "create",
    possession: "any",
  })
  async createDph(
    @graphql.Args() args: CreateDphArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Dph> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "Dph",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"Dph"} creation is forbidden for roles: ${roles}`
      );
    }
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Dph)
  @nestAccessControl.UseRoles({
    resource: "Dph",
    action: "update",
    possession: "any",
  })
  async updateDph(
    @graphql.Args() args: UpdateDphArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Dph | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Dph",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"Dph"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      // @ts-ignore
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Dph)
  @nestAccessControl.UseRoles({
    resource: "Dph",
    action: "delete",
    possession: "any",
  })
  async deleteDph(@graphql.Args() args: DeleteDphArgs): Promise<Dph | null> {
    try {
      // @ts-ignore
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Order])
  @nestAccessControl.UseRoles({
    resource: "Dph",
    action: "read",
    possession: "any",
  })
  async orders(
    @graphql.Parent() parent: Dph,
    @graphql.Args() args: OrderFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Order[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Order",
    });
    const results = await this.service.findOrders(parent.id, args);

    if (!results) {
      return [];
    }

    return results.map((result) => permission.filter(result));
  }
}
