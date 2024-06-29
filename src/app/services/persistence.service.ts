import { inject, Injectable } from '@angular/core';
import { STORAGE } from '../tokens';
import { EPersistence } from '../enums';

@Injectable({
  providedIn: 'root',
})
export class PersistenceService {
  private readonly storage = inject(STORAGE);

  /**
   * Сохраняет токен в localStorage
   * @param {string} token Токен для сохранения
   * @return {void} Ничего не возвращает
   */
  public setToken(token: string | undefined): void {
    try {
      if (typeof token === 'string') {
        this.storage.setItem(EPersistence.accessToken, token);
      }
    } catch (e) {
      console.error('Error saving token', e);
    }
  }

  /**
   * Возвращает сохраненный токен
   * @return {string} Сохраненный токен
   */
  public getToken(): string | null {
    try {
      return this.storage.getItem(EPersistence.accessToken);
    } catch (e) {
      console.error('Error getting token', e);
      return null;
    }
  }
}
