import React, { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';

export const WrappedRouter = (component: React.ReactNode): ReactNode => {
  return <BrowserRouter>{component}</BrowserRouter>;
};
