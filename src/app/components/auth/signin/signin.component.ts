import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { BackendErrorMessagesComponent } from '../../backend-error-messages/backend-error-messages.component';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { IBackendErrors, IUserLogin } from '../../../interfaces';
import { select, Store } from '@ngrx/store';
import { authErrorsSelector, isSubmittingSelector } from '../store/selectors';
import { UserLoginModel } from '../../../models';
import { AuthActions } from '../store/actions';

@Component({
  selector: 'rw-signin',
  standalone: true,
  imports: [
    AsyncPipe,
    BackendErrorMessagesComponent,
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
  ],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SigninComponent implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly store = inject(Store);

  public form!: FormGroup;

  public errors$!: Observable<IBackendErrors | null>;
  public isSubmitting$!: Observable<boolean>;

  ngOnInit(): void {
    this.initializeForm();
    this.initializeValues();
  }

  public onSubmit(): void {
    if (this.form.valid) {
      const { email, password } = this.form.value;
      const request: IUserLogin = new UserLoginModel(email, password);
      this.store.dispatch(AuthActions.login({ request }));
      this.form.reset();
    }
  }

  private initializeForm(): void {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  private initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.errors$ = this.store.pipe(select(authErrorsSelector));
  }
}
