import { Get, Controller, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appservice: AppService) {}
  @Get()
  @Render('form')
  getHello(): object {
    return {};
  }
}
