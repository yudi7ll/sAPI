#!/bin/sh
set -eu
base="${SAPI_URL:-http://127.0.0.1:3000}"
ok=$(curl -fsS -w '\n%{http_code} %{content_type}' "$base/api/mock")
printf '%s\n' "$ok" | grep -Fq '{"data":{},"message":"Hello from sAPI"}'
printf '%s\n' "$ok" | grep -Eq '200 application/json'
err=$(curl -sS -w '\n%{http_code} %{content_type}' "$base/api/mock/error")
printf '%s\n' "$err" | grep -Fq '"error":"Bad Request"'
printf '%s\n' "$err" | grep -Eq '400 application/json'
echo 'sAPI smoke tests passed (200 success and 400 error JSON)'
