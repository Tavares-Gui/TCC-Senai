import '../styles/globals.css';
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <SpeedInsights />
      <Analytics />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
