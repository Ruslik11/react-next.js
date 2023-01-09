import {AppProps} from 'next/app';
import '../styles/globals.css';
import Head from "next/head";
import Router from "next/router";

Router?.events?.on('routeChangeComplete', () => {
    if (typeof window !== 'undefined') {
        // ми сервері
    }
});

export default function App({Component, pageProps, router}: AppProps): JSX.Element {
    return <>
        <Head>
            <title>MyTop - наш кращий топ</title>
            <link rel="icon" href="/favicon.ico"/>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <meta property='og:url' content={process.env.NEXT_PUBLIC_DOMAIN + router.asPath} />
            <meta property='og:locale' content='uk_UA' />
        </Head>
        <Component {...pageProps} />
    </>;
}
