import { Component, AfterContentInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

// Services
import { NavbarRoutingServiceService } from '../../services/navbar-routing-service.service';
import { LanguagesService } from '../../services/languages.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements AfterContentInit{
  in_cv!: boolean;
  cv_language: string = "spanish";
  page_theme!: string;

  constructor(
    private router: Router,
    private navbarRoutingService: NavbarRoutingServiceService,
    private languagesService: LanguagesService,
  )
  {}

  ngAfterContentInit(){
    // This is to show "Cambiar idioma CV" in the navbar

    // Listen to route changes using Router events
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.navbarRoutingService.is_user_in_mi_cv(); // This initializes the variable of the serice checking if the user is in the "/mi_cv" url or not.
        
        // This is a test for checking if we are in the right url. It'll show on the angular console.
        // console.log('Current URL: ' + this.router.url);
      });

    // I listen to the variable initialized just before so that every change to that variable also changes the local one.
    this.navbarRoutingService.data$.subscribe({
      next: (data) => {
        this.in_cv = data;
      }
    });

    this.updateTheme();

    this.selectStyle();
  }


  // TESTS
  selectStyle(){
    document.head.setAttribute('title', 'MyAngularPage');
  }

  // --------------------------------------------------------------------------------------------------------------------------------------------
  // BUTTON "CAMBIAR IDIOMA CV"
  // Si está en la url "mi_cv" muestra el botón "Cambiar idioma CV"
  update_in_cv(){
    this.navbarRoutingService.is_user_in_mi_cv();
  }


  // --------------------------------------------------------------------------------------------------------------------------------------------
  // PAGE THEMES
  // Possible themes are "light" and "dark"
  setThemeToken(value: string){
    document.cookie = "theme=" + value + ";path=/"; // The path is important for clarifying where we want it to be saved. In the static website it does not save properly
  }

  /* In order to see what is the current theme when we reload the page we will need an observable,
  because when we reload the page the cookie takes longer to load than the code does to execute, so it uses the default value we give it here
  and not the one the cookie has. For that reason we need to use an observable that continuesly gives updates to the variable, and if it changes
  "updateTheme" can use it properly. */
  getThemeTokenObservable(): Observable<string>{
    return new Observable<string>((data) => {
      let decodedCookie = decodeURIComponent(document.cookie);
      let cookie_array = decodedCookie.split(';');

      for (let i = 0; i < cookie_array.length; i++){
        let cookie = cookie_array[i].split("=");
        if (cookie[0] = "theme"){
          data.next(cookie[1])
        }
      }

      data.next(document.cookie);
    })
  }

  // We cannot use the above function because it returns an observable, so for functions that need a string only at a specific time, we use this instead.
  getThemeToken(){
    let theme_var;
    let decodedCookie = decodeURIComponent(document.cookie);
    let cookie_array = decodedCookie.split(';');

    for (let i = 0; i < cookie_array.length; i++){
      let cookie = cookie_array[i].split("=");  // This divides the current cookie (for example "theme=dark") into name and value

      // cookie[0] is the name of the cookie
      // cookie[1] is the value of the cookie
      if (cookie[0] = "theme"){
        theme_var = cookie[1];
      }
    }

    return theme_var;
  }

  /* "data-bs-theme" 
  is the variable for the css to select what theme we want.
  In order to change this we need to change the variable that is in the main html, "index.html".
  That's why I'm using document.body, to find that variable and then change it. */

  // This gets executed when the component finishes loading
  // It looks for the cookie. If it does not exist it creates it with "dark", if it does it checks if it is light or dark and changes the css acordingly
  updateTheme(){
    this.getThemeTokenObservable().subscribe({
      next: (data) => {
        if (data === "dark"){
          document.body.setAttribute('theme', 'dark');    // Change the actual CSS variable
        } else if (data === "light"){
          document.body.setAttribute('theme', 'light');   // Change the actual CSS variable
        }
      }
    });
  }

  // This is what is activated when we press the button to change the theme in the website
  // It also initialices the cookie if there is none set.
  changeTheme(){
    if (this.getThemeToken() === "dark"){
      document.body.setAttribute('theme', 'light'); // Change the actual CSS variable
      this.setThemeToken("light");                          // Update the cookie status so we can use it in the future
    } else if (this.getThemeToken() === "light"){
      document.body.setAttribute('theme', 'dark');
      this.setThemeToken("dark");
    } else if (this.getThemeToken() !== "light" && this.getThemeToken() !== "dark"){  // This gets executed if the cookie does not exist or it does not have a correct value.
      document.body.setAttribute('theme', 'light');
      this.setThemeToken("light"); 
    } else {
      alert('There was an error changing the theme...');    // If this executed you fucked up
    }
  }



  // --------------------------------------------------------------------------------------------------------------------------------------------
  // CV LANGUAGE
  change_cv_language(){
    this.languagesService.change_cv_language();
  }
}