import { Component } from '@angular/core';
import { LanguagesService } from '../../services/languages.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent {
  constructor (private languagesService: LanguagesService)
  {
    // This listens to the cv_language variable changes in the languagesService
    this.languagesService.data$.subscribe({
      next: (data) => {
        this.cv_language = data;
      }
    });
  };

  cv_language: string = "spanish";
}