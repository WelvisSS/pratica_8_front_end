import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

@Injectable({
  providedIn: 'root'
})
export class WikiService {
  private url = 'https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=';

  constructor(private http: HttpClient) { }

  search(term: string): Observable<any> {
    return this.http.jsonp(this.url + term, 'callback');
  }
}