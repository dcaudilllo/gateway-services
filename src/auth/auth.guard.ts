import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { load } from 'ts-dotenv';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    return this.#hasPermissions(request.headers['api-key']);
  }

  #hasPermissions(key: string): any {
    const env = load({
      ACCESS_TOKEN: String,
    });
    return key === env.ACCESS_TOKEN;
  }
}
