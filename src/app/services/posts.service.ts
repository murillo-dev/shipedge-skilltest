import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private http = inject(HttpClient);

  private url = 'https://jsonplaceholder.typicode.com/posts';

  getPosts() {
    return this.http.get(this.url)
  }
}
