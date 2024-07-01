import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { FeedComponent } from '../feed/feed.component';
import { BannerComponent } from '../../banner/banner.component';
import { PopularTagsComponent } from '../../tags/popular-tags/popular-tags.component';
import { FeedTogglerComponent } from '../../feed-toggler/feed-toggler.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'rw-global-feed',
  standalone: true,
  imports: [
    FeedComponent,
    BannerComponent,
    PopularTagsComponent,
    FeedTogglerComponent,
  ],
  templateUrl: './global-feed.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GlobalFeedComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);

  public readonly apiUrl = '/articles';

  ngOnInit(): void {
    this.route;
  }
}
