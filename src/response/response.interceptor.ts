import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data) => ({
        status: 'success',
        message: context.switchToHttp().getRequest().route.path.includes('create')
          ? 'Creado correctamente'
          : 'Operación realizada con éxito',
        data: data,
      })),
    );
  }
}
