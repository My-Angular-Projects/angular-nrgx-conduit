import { assertInInjectionContext, DestroyRef, inject } from '@angular/core';
import { Subject } from 'rxjs';

export const destroyHelper = (): Subject<void> => {
  assertInInjectionContext(destroyHelper);
  const destroy = new Subject<void>();

  inject(DestroyRef).onDestroy(() => {
    destroy.next();
    destroy.complete();
  });

  return destroy;
};
