import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IFeed } from '../interfaces';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FeedService {
  private readonly http = inject(HttpClient);

  /**
   * Get feeds
   * @param {string} api
   */
  public getFeeds(api: string): Observable<IFeed> {
    const url = `${environment.baseUrl}${api}`;

    return this.http.get<IFeed>(url);
  }
}
