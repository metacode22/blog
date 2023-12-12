'use client';

import Script from 'next/script';
import { GA_TRACKING_ID, pageview } from '../utils/gtag';
import { useEffect } from 'react';
import { isDev } from '../constants/mode';
import { usePathname, useSearchParams } from 'next/navigation';

export default function GoogleAnalyticsScript() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (isDev) return;

    const url = new URL(pathname + searchParams.toString());
    pageview(url);
  }, [pathname, searchParams]);

  return (
    <>
      <Script
        strategy='afterInteractive'
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script
        id='gtag-init'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_TRACKING_ID}', {
        page_path: window.location.pathname,
        });
      `,
        }}
      />
    </>
  );
}
