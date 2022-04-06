import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class StatusService {
  private statusUrl = 'http://localhost:3000/movies';

  constructor(private httpClient: HttpClient) { }

  async getMovies(): Promise<Observable<any>> {
    return await this.httpClient.get(this.statusUrl);
  }
}
