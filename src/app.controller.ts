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
    const errors: any = {};
    if (eletkor < 18) {
      errors.eletkor = 'Nem múltál el 18!';
    }
    if (nev == '') {
      errors.nev = 'A név mezőt is töltsd ki!';
    }
    // return { nev: nev, eletkor: eletkor, errors: errors };
    return { nev, eletkor, errors, negyedik: 12 };
  }
}
