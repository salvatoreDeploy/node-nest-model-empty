import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common'
import { PrismaClient } from '@prisma/client'

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
    super()
  }

  onModuleDestroy() {
    return this.$connect
  }

  onModuleInit() {
    return this.$disconnect
  }
}
