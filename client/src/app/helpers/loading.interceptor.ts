import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay, finalize, tap } from 'rxjs/operators';
import { LoadingService } from '../services/loading.service';
import { RestrictedUrl } from './article.data';




@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  restrictedUrls: RestrictedUrl[] = [];
  constructor(
    private loadingSvc: LoadingService
    ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    
    this.loadingSvc.addRequest(request.url);
      const authReq= request.clone({})
      return this.handleRequest(authReq, next);
    }
  
  
  private handleRequest(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // this.showLoading();
    return next.handle(request).pipe(
      delay(250),
      finalize(() => {
        this.loadingSvc.removeRequest(request.url);
      })
    );
  }

  // private showLoading(): void {
  //   console.log("Loading")
  //   this.loadingSvc.setLoading(true);
  // }

  // private hideLoading(): void {
  //   console.log("Done")
  //   this.loadingSvc.setLoading(false)
  //   this.loadingSvc.turnOffLoading();
  // }
}