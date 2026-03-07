import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguagesService {

  constructor(private router: Router) { }

  private cv_language = new BehaviorSubject<string>("spanish");
  data$ = this.cv_language.asObservable();

  change_cv_language(){
    // const currentLanguage = this.cv_language.value
    if (this.cv_language.value === "spanish"){
      this.cv_language.next("english");
    }else{
      this.cv_language.next("spanish");
    }
    
    /* this.data$.subscribe(value => {
      if (value === "spanish"){
        this.cv_language.next("english");
      }else{
        this.cv_language.next("spanish");
      }
    }) */
  }
}