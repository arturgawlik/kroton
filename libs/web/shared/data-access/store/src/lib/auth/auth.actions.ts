import { createAction } from '@ngrx/store';

export const login = createAction('[Navigation Bar] Login Button Clicked');
export const logout = createAction('[Navigation Bar] Logout Button Clicked');
export const loginSuccess = createAction('[AuthService] Auth Login Request Ended With Success');
export const loginError = createAction('[AuthService] Auth Login Request Ended With Error');
