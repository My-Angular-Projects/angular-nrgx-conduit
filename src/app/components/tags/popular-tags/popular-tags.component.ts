import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { Observable } from 'rxjs';
import { PopularTag } from '../../../interfaces';
import { select, Store } from '@ngrx/store';
import { tagsDataSelector } from '../store/tags.selector';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'rw-popular-tags',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './popular-tags.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PopularTagsComponent implements OnInit {
  private readonly store = inject(Store);

  public tags$!: Observable<PopularTag[]>;

  ngOnInit(): void {
    this.tags$ = this.store.pipe(select(tagsDataSelector));
  }
}
