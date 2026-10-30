import { Controller, Get, HttpCode, Inject, NotFoundException, Res } from '@nestjs/common';
import { Response } from 'express';
import { ResponsesService } from './responses.service';

@Controller('api/mock')
export class MockController {
  constructor(private readonly responses: ResponsesService) {}
  @Get() async success(@Res() res: Response) { return this.send('success', res); }
  @Get('error') async badRequest(@Res() res: Response) { return this.send('error400', res); }
  private async send(key: string, res: Response) {
    const item = await this.responses.get(key);
    if (!item) throw new NotFoundException({ error: `Mock response '${key}' is not configured` });
    return res.status(item.status).json(item.body);
  }
}
