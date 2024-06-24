import { InjectionToken } from '@angular/core';

// https://angular.dev/guide/di/lightweight-injection-tokens#using-lightweight-injection-tokens
export const STORAGE = new InjectionToken<Storage>(
  'Web Storage Injection Token',
);
