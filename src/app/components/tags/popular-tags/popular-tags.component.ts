import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AsyncPipe } from '@angular/common';
import { TagsActionsGroup } from '../store/tags.action';
import { LoadingComponent } from '../../loading/loading.component';
import { ErrorMessagesComponent } from '../../error-messages/error-messages.component';
import { RouterLink } from '@angular/router';
import { tagsFeature } from '../store/tags.reducer';
import { Observable } from 'rxjs';

@Component({
  selector: 'rw-popular-tags',
  standalone: true,
  imports: [AsyncPipe, LoadingComponent, ErrorMessagesComponent, RouterLink],
  templateUrl: './popular-tags.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PopularTagsComponent implements OnInit {
  private readonly store = inject(Store);

  public readonly tags$: Observable<string[]> = this.store.pipe(
    select(tagsFeature.selectData),
  );
  public readonly errors$: Observable<string | null> = this.store.pipe(
    select(tagsFeature.selectErrors),
  );
  public readonly isLoading$: Observable<boolean> = this.store.pipe(
    select(tagsFeature.selectIsLoading),
  );

  ngOnInit(): void {
    this.store.dispatch(TagsActionsGroup.get());
  }
}
