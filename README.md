# sAPI

A minimal placeholder API using NestJS, Drizzle ORM and PostgreSQL.

## Endpoints
- `GET /api/mock` — returns the configured JSON with HTTP 200.
- `GET /api/mock/error` — returns the configured JSON error with HTTP 400.

On first boot, defaults are inserted only when absent. Edit `mock_responses.body` in PostgreSQL to customize responses; changes take effect immediately. `key` values are `success` and `error400`. Example: `UPDATE mock_responses SET body = '{"message":"custom response"}'::jsonb WHERE key='success';`

## Run on h1
Copy `.env.example` to `.env`, then `docker compose up -d --build`. Check with `curl -i http://localhost:3000/api/mock` and `/api/mock/error`. Faker/automatic field generation is intentionally not included.
