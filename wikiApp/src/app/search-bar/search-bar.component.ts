import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  term: string = '';

  @Output() search = new EventEmitter<string>();


  onSearch(): void {
    this.search.emit(this.term);
  }
}