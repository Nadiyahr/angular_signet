import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'movie-list';
  movies = [
    {
      id: 120,
      name: 'Abra',
      'genre1': 'detective',
      'genre2': 'melodrama',
      'year': 2000
    },{
      id: 121,
      name: 'Cadabra',
      'genre1': 'detective',
      'genre2': 'melodrama',
      'year': 2001
    },{
      id: 122,
      name: 'Bibity',
      'genre1': 'detective',
      'genre2': 'melodrama',
      'year': 2002
    }
  ];


}
