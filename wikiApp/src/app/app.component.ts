import { Component } from '@angular/core';
import { WikiService } from './wikiServer/wiki.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  results: any[] = [];
  term: string = "";

  constructor(private wiki: WikiService) { }

  onSearch(term: string): void {
    this.term = term;
    this.wiki.search(term).subscribe(data => this.results = data.query.search);
  }
}