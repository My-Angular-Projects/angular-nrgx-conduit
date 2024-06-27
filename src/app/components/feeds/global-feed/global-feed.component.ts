import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FeedComponent } from '../feed/feed.component';

@Component({
  selector: 'rw-global-feed',
  standalone: true,
  imports: [FeedComponent],
  templateUrl: './global-feed.component.html',
  styleUrl: './global-feed.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GlobalFeedComponent {}
