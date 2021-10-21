import { Component } from '@angular/core';
import { ThemeService } from './theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'prime';
  saga = true;
  constructor(private themeService: ThemeService)
  {

  }

  changeTheme()
  {
    this.saga=!this.saga;
    if(this.saga)
      this.themeService.change('saga-blue');
    else
    this.themeService.change('arya-green');
  }
}
