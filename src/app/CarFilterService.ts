import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class CarFilterService {
                   
  private selectedCarTypesSubject = new BehaviorSubject<string[]>([]);
  selectedCarTypes$: Observable<string[]> = this.selectedCarTypesSubject.asObservable();

  constructor( ) { }

  updateSelectedCarTypes(types: string[]) {
    this.selectedCarTypesSubject.next(types);
  }
}
