'use client';

import { Provider as StoreProvider } from 'react-redux';
import React from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import StyledComponentsRegistry from './StyledComponentsRegistry/StyledComponentsRegistry';
import store from '@/store/store';
import {ThemeProvider} from './ThemeProvider';
import {TranslateProvider} from './Translate/TranslateProvider';

const Providers = ({ children }: { children: React.ReactNode }) => (
  <StoreProvider store={store}>
    <StyledComponentsRegistry>
      <AppRouterCacheProvider>
        <TranslateProvider>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </TranslateProvider>
      </AppRouterCacheProvider>
    </StyledComponentsRegistry>
  </StoreProvider>
);

export default Providers;
