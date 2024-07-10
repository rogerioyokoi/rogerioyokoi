import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './index.css';
import router from './routes/routes';

import * as Sentry from '@sentry/react';
import mixpanel from 'mixpanel-browser';

import LogRocket from 'logrocket';
import setupLogRocketReact from 'logrocket-react';

// Near entry of your product, init Mixpanel
mixpanel.init('36fc564194633c37e300015c0d0259cd', { debug: true, track_pageview: true, persistence: 'localStorage' });

LogRocket.init('hsfpcp/rogerio-oliveira-yokoi');
setupLogRocketReact(LogRocket);

Sentry.init({
  dsn: 'https://6b20b2b2d4dafc17e14ff78ff9648a7a@o4507583782125568.ingest.us.sentry.io/4507583783895040',
  integrations: [Sentry.browserTracingIntegration(), Sentry.replayIntegration()],
  // Performance Monitoring
  tracesSampleRate: 1.0, //  Capture 100% of the transactions
  // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
  tracePropagationTargets: ['localhost', /^https:\/\/yourserver\.io\/api/],
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});

LogRocket.getSessionURL((sessionURL) => {
  Sentry.withScope((scope) => {
    scope.setExtra('sessionURL', sessionURL);
  });
});

LogRocket.getSessionURL((sessionURL) => {
  mixpanel.track('LogRocket', { sessionURL: sessionURL });
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
