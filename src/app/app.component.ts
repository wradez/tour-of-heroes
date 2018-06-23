import { Component } from '@angular/core';

@Component({ //a decorator
  selector: 'app-root', //where to render on teh page
  templateUrl: './app.component.html', //teh html document that will be associated with this component
  styleUrls: ['./app.component.css'] // teh styles associated with this component
})
export class AppComponent {
  title = 'Tour of Heroes';
}
