import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FeedComponent } from '../feed/feed.component';
import { BannerComponent } from '../../banner/banner.component';

@Component({
  selector: 'rw-global-feed',
  standalone: true,
  imports: [FeedComponent, BannerComponent],
  templateUrl: './global-feed.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GlobalFeedComponent {
  public readonly apiUrl = '/articles';
}
