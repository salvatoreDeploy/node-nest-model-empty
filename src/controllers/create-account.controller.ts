import {
  ConflictException,
  Body,
  Controller,
  Post,
  HttpCode,
  UsePipes,
} from '@nestjs/common'
import { hash } from 'bcryptjs'
import { ZodValidationPipe } from 'src/pipes/zod-validation-pipe'
import { PrismaService } from 'src/prisma/prisma.service'
import { z } from 'zod'

const createAccountBodySchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(6),
})

type CreateAccountBody = z.infer<typeof createAccountBodySchema>

@Controller('/account')
export class CreateAccountController {
  constructor(private prisma: PrismaService) {}

  @Post()
  @HttpCode(201)
  @UsePipes(new ZodValidationPipe(createAccountBodySchema))
  async handle(@Body() body: CreateAccountBody) {
    const { name, email, password } = createAccountBodySchema.parse(body)

    const userEmailAlreadyExists = await this.prisma.user.findUnique({
      where: {
        email,
      },
    })

    if (userEmailAlreadyExists) {
      throw new ConflictException('User email already exists')
    }

    const hashPassword = await hash(password, 8)

    await this.prisma.user.create({
      data: {
        name,
        email,
        password: hashPassword,
      },
    })
  }
}
