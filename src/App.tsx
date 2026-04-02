import { Box } from '@mui/material';
import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainLayout from './components/layouts/MainLayout';
import { ThemeProvider } from './theme/themeProvider';

// Lazy-loaded pages
const Home = lazy(() => import('./pages/Home'));
const Contact = lazy(() => import('./pages/Contact'));
const DeleteAccount = lazy(() => import('./pages/DeleteAccount'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const NotFound = lazy(() => import('./pages/NotFound'));

const App: React.FC = () => (
  <ThemeProvider>
    <Suspense fallback={<Box />}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/delete-account" element={<DeleteAccount />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  </ThemeProvider>
);

export default App;
