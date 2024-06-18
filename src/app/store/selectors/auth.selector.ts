import { IGlobalState } from '@interfaces';

export const isSubmittingSelector = (globalState: IGlobalState) =>
  globalState.auth.isSubmitting;

export const authUserSelector = (state: IGlobalState) => state.auth.user;
