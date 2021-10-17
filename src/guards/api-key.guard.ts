import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

import * as dotenv from 'dotenv';
const data = dotenv.config();

const apiKeyHeader = data.parsed?.PUBLIC_API_KEY_NAME || 'test-header';
const apiKey = data.parsed?.PUBLIC_API_KEY_VALUE || 'test-sercret';

@Injectable()
export class ApiKeyGuard implements CanActivate {
  verifyApiKey = (request: any) => request.headers[apiKeyHeader] === apiKey;

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();

    return this.verifyApiKey(request);
  }
}
