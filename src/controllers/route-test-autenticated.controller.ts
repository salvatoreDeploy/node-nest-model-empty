import { Controller, Get, UseGuards } from '@nestjs/common'
import { CurretUser } from 'src/authenticate/current-user-decorator'
import { JwtAuthGuard } from 'src/authenticate/jwt-auth-guard'
import { TokenPayload } from 'src/authenticate/jwt.strategy'

@Controller('/rota-protected')
@UseGuards(JwtAuthGuard)
export class RouteAuthenticatedTest {
  constructor() {}

  @Get()
  async handle(@CurretUser() user: TokenPayload) {
    console.log(user.sub)

    return 'Teste para rotas protegidas com Passport Strategy'
  }
}
