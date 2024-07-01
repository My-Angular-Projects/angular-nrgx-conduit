import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { AsyncPipe, NgClass } from '@angular/common';
import { select, Store } from '@ngrx/store';
import { feedsFeature } from '../feeds/store/reducers';

@Component({
  selector: 'rw-pagination',
  standalone: true,
  imports: [RouterLink, AsyncPipe, NgClass],
  templateUrl: './pagination.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationComponent {
  @Input({
    alias: 'articlesCurrentPage',
    required: true,
  })
  public articlesCurrentPage!: number;

  @Input({
    alias: 'baseUrl',
    required: true,
  })
  public baseUrl = '';

  public readonly pagesCount$ = inject(Store).pipe(
    select(feedsFeature.selectPagesCount),
  );
}
