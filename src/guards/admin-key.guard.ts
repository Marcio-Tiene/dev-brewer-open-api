import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

const apiKeyHeader = process.env.ADMIN_API_KEY_NAME;
const apiKey = process.env.ADMIN_API_KEY_VALUE;

@Injectable()
export class AdminKeyGuard implements CanActivate {
  verifyApiKey = (request: any) => request.headers[apiKeyHeader] === apiKey;

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();

    return this.verifyApiKey(request);
  }
}
