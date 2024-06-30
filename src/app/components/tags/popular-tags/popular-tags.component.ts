import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { Observable } from 'rxjs';
import { PopularTag } from '../../../interfaces';
import { select, Store } from '@ngrx/store';
import {
  tagsDataSelector,
  tagsErrorsSelector,
  tagsLoadingSelector,
} from '../store/tags.selector';
import { AsyncPipe } from '@angular/common';
import { TagsActionsGroup } from '../store/tags.action';
import { LoadingComponent } from '../../loading/loading.component';
import { ErrorMessagesComponent } from '../../error-messages/error-messages.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'rw-popular-tags',
  standalone: true,
  imports: [AsyncPipe, LoadingComponent, ErrorMessagesComponent, RouterLink],
  templateUrl: './popular-tags.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PopularTagsComponent implements OnInit {
  private readonly store = inject(Store);

  public tags$!: Observable<PopularTag[]>;
  public isLoading$!: Observable<boolean>;
  public errors$!: Observable<string | null>;

  ngOnInit(): void {
    this.fetchData();
    this.initializeData();
  }

  private fetchData(): void {
    this.store.dispatch(TagsActionsGroup.get());
  }

  private initializeData(): void {
    this.tags$ = this.store.pipe(select(tagsDataSelector));
    this.errors$ = this.store.pipe(select(tagsErrorsSelector));
    this.isLoading$ = this.store.pipe(select(tagsLoadingSelector));
  }
}
