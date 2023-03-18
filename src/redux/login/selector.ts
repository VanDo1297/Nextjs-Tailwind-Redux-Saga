import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

export const selectLoginState = (state: RootState) => state.login;

export const loginSelector = createSelector(selectLoginState, state => state);