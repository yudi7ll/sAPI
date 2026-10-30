import { Module } from '@nestjs/common';
import { DbModule } from './db.module';
import { MockController } from './mock.controller';
import { ResponsesService } from './responses.service';
@Module({ imports: [DbModule], controllers: [MockController], providers: [ResponsesService] })
export class AppModule {}
