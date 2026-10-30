import { pgTable, text, jsonb, integer } from 'drizzle-orm/pg-core';

export const mockResponses = pgTable('mock_responses', {
  key: text('key').primaryKey(),
  status: integer('status').notNull(),
  body: jsonb('body').notNull(),
});
