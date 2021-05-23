import { PrismaService } from "nestjs-prisma";
import { Prisma, Dph, Order } from "@prisma/client";

export class DphServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.DphFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.DphFindManyArgs>
  ): Promise<number> {
    return this.prisma.dph.count(args);
  }

  async findMany<T extends Prisma.DphFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.DphFindManyArgs>
  ): Promise<Dph[]> {
    return this.prisma.dph.findMany(args);
  }
  async findOne<T extends Prisma.DphFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.DphFindUniqueArgs>
  ): Promise<Dph | null> {
    return this.prisma.dph.findUnique(args);
  }
  async create<T extends Prisma.DphCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.DphCreateArgs>
  ): Promise<Dph> {
    return this.prisma.dph.create<T>(args);
  }
  async update<T extends Prisma.DphUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.DphUpdateArgs>
  ): Promise<Dph> {
    return this.prisma.dph.update<T>(args);
  }
  async delete<T extends Prisma.DphDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.DphDeleteArgs>
  ): Promise<Dph> {
    return this.prisma.dph.delete(args);
  }

  async findOrders(
    parentId: string,
    args: Prisma.OrderFindManyArgs
  ): Promise<Order[]> {
    return this.prisma.dph
      .findUnique({
        where: { id: parentId },
      })
      .orders(args);
  }
}
