import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'rw-signin',
  standalone: true,
  imports: [],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SigninComponent {}
