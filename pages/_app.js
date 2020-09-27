import Navigation from "../components/navigation/navigation";
import App from "next/app";
import {StateProvider} from "../lib/store";

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
            <>
            <StateProvider>
                <Navigation>
                    <Component {...pageProps} />
                </Navigation>
            </StateProvider>
                <style jsx>{`
                @import url('https://fonts.googleapis.com/css?family=Open+Sans');

                body {
                   padding: 0 !important;
                   font-family: 'Open Sans', serif !important;
                   color: #101010; 
                }
                h1 {
                   font-family: 'Open Sans', serif;
                }
`}
                </style>
            </>
        )
    }
}
