import Navigation from '../components/navigation/navigation';
import {StateProvider} from '../lib/store';
import '../styles/layout/grid/grid.base.scss'
import '../styles/fonts/_fonts.base.scss'
import '../styles/main.scss'
import App from 'next/app';

export default class MyApp extends App {

    static async getInitialProps({ Component, ctx }) {
        let pageProps = {};

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }

        return { pageProps };
    }

    render() {
        const { Component, pageProps } = this.props;
        return (
            <StateProvider>
                <Navigation>
                    <Component {...pageProps} />
                </Navigation>
            </StateProvider>
        )
    }
}
