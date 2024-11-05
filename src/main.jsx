import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

//...
import * as Sentry from "@sentry/react";

Sentry.init({
	dsn: "https://4ccd6a7dfd5598e83ee7afc29fa326a9@o4508245808447488.ingest.us.sentry.io/4508245810610176",
	integrations: [
		Sentry.browserTracingIntegration(),
		Sentry.metrics.metricsAggregatorIntegration(),
		Sentry.reactRouterV6BrowserTracingIntegration({
			useEffect: React.useEffect,
		}),
		Sentry.replayIntegration({
			maskAllText: false,
			blockAllMedia: false,
		}),
	],
	tracesSampleRate: 1.0,
	tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
	replaysSessionSampleRate: 0.1,
	replaysOnErrorSampleRate: 1.0,
});

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
)
