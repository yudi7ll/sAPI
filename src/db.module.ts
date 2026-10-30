import { Global, Module } from '@nestjs/common';
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import * as schema from './schema';

@Global()
@Module({ providers: [
  { provide: 'PG_POOL', useFactory: () => new Pool({ connectionString: process.env.DATABASE_URL }) },
  { provide: 'DRIZZLE', inject: ['PG_POOL'], useFactory: (pool: Pool) => drizzle(pool, { schema }) },
], exports: ['PG_POOL', 'DRIZZLE'] })
export class DbModule {}
