import { HttpInterceptor } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { ApiServiceService } from './api-service.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private injector: Injector) { }

  intercept(req: { clone: (arg0: { setHeaders: { Authorization: string; }; }) => any; }, next: { handle: (arg0: any) => any; }){
    let apiService = this.injector.get(ApiServiceService)
    let tokenizedReq = req.clone({
      setHeaders:{
        'Authorization': `Bearer ${apiService.getToken()}`
      }
      })
      return next.handle(tokenizedReq)
  }
}
