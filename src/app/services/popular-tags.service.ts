import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { map, Observable } from 'rxjs';
import { IResponsePopularTag, PopularTag } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class PopularTagsService {
  private readonly http = inject(HttpClient);

  /**
   * Возвращает список тегов
   * @return {PopularTag[]} Список тегов
   */
  public getTags(): Observable<PopularTag[]> {
    const url = `${environment.baseUrl}tags`;

    return this.http
      .get<IResponsePopularTag>(url)
      .pipe(map((response: IResponsePopularTag) => response.tags));
  }
}
