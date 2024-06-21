import { inject, Injectable } from '@angular/core';
import { WINDOW } from '../tokens';
import { EPersistence } from '../enums';

@Injectable({
  providedIn: 'root',
})
export class PersistenceService {
  private readonly window = inject(WINDOW);

  public setToken(token: string | undefined): void {
    try {
      this.window.localStorage.setItem(
        EPersistence.accessToken,
        JSON.stringify(token),
      );
    } catch (e) {
      console.error('Error saving token', e);
    }
  }

  public getToken(): string | null {
    try {
      return this.window.localStorage.getItem(EPersistence.accessToken);
    } catch (e) {
      console.error('Error getting token', e);
      return null;
    }
  }
}
