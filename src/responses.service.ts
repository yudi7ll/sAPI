import { Injectable, OnModuleInit, Inject } from '@nestjs/common';
import { sql } from 'drizzle-orm';

@Injectable()
export class ResponsesService implements OnModuleInit {
  constructor(@Inject('DRIZZLE') private readonly db: any) {}
  async onModuleInit() {
    await this.db.execute(sql`CREATE TABLE IF NOT EXISTS mock_responses (key text PRIMARY KEY, status integer NOT NULL, body jsonb NOT NULL)`);
    await this.db.execute(sql`INSERT INTO mock_responses (key,status,body) VALUES ('success',200,'{"message":"Hello from sAPI","data":{}}'),('error400',400,'{"error":"Bad Request","message":"This is a configurable mock error"}') ON CONFLICT (key) DO NOTHING`);
  }
  async get(key: string) {
    const result = await this.db.execute(sql`SELECT status, body FROM mock_responses WHERE key = ${key}`);
    return result.rows[0] ?? null;
  }
}
