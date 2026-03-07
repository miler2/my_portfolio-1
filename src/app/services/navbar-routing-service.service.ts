import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarRoutingServiceService {

  constructor(private router: Router) { }

  private dataSubject = new BehaviorSubject<boolean>(false);
  data$ = this.dataSubject.asObservable();

  update_in_cv(new_in_cv: boolean){
    this.dataSubject.next(new_in_cv);
  }

  is_user_in_mi_cv(){
    if (this.router.url == "/cv"){
      this.update_in_cv(true);
    }else{
      this.update_in_cv(false);
    }
  }
}