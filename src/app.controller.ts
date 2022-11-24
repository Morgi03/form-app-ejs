import { Get, Controller, Render, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appservice: AppService) {}
  @Get()
  @Render('form')
  getHello(
    @Query('nev') nev: string,
    @Query('eletkor') eletkor: number,
  ): object {
    return { nev: nev, eletkor: eletkor };
  }
}
