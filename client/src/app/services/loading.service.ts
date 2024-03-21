import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private isLoadingSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isLoading$: Observable<boolean> = this.isLoadingSubject.asObservable();
  private requestStack: Set<string> = new Set();

  addRequest(request: string): void {
    this.requestStack.add(request);
    this.updateLoadingState();
  }

  removeRequest(request: string): void {
    this.requestStack.delete(request);
    this.updateLoadingState();
  }

  private updateLoadingState(): void {
    this.isLoadingSubject.next(this.requestStack.size > 0);
  }
}
