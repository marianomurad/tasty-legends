import Navigation from "../components/navigation/navigation";
import App from "next/app";
import {StateProvider} from "../lib/store";
import '../styles/main.scss'
import '../styles/layout/grid/grid.base.scss'

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
