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
      
      let token;
      
        token = localStorage.getItem('access_token') ?? "";
        let authReq;
        if(token){
          authReq= request.clone({
            headers: request.headers.set('Authorization', `JWT ${token}`)
          })
        }else{
          authReq= request.clone({})
        };
        return this.handleRequest(authReq, next);
      
        // return this.handleRequest(request, next);
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

// import { Injectable } from '@angular/core';
// import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { finalize } from 'rxjs/operators';
// import { LoadingService } from '../services/loading.service';

// @Injectable()
// export class LoadingInterceptor implements HttpInterceptor {
//   publicRequestURLs: string[] = [
//     'http://127.0.0.1:8000/api/portfolio/img-group/',
//     'http://127.0.0.1:8000/api/portfolio/img-item/',
//     'http://localhost:8000/api/portfolio/img-group/',
//     'http://localhost:8000/api/portfolio/img-item/',
//   ]
//   constructor(private loadingSvc: LoadingService) {}

//   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     // Optionally, skip adding the loading state for certain requests
//     if (!this.shouldBypass(request)) {
//       this.loadingSvc.addRequest(request.url);
//     }
    
//     // Always clone the request to add the token if available, independent of loading state
//     const token = localStorage.getItem('access_token') ?? "";
//     const authReq = token ? request.clone({
//       headers: request.headers.set('Authorization', `JWT ${token}`)
//     }) : request;

//     return next.handle(authReq).pipe(
//       finalize(() => {
//         // Only remove the request from the loading service if it was added
//         if (!this.shouldBypass(request)) {
//           this.loadingSvc.removeRequest(request.url);
//         }
//       })
//     );
//   }

//   private shouldBypass(request: HttpRequest<any>): boolean {
    
//     return request.url in this.publicRequestURLs;
//   }
// }
