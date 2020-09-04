import Navigation from "../components/navigation";
import App from "next/app";

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
            <Navigation>
                        <Component {...pageProps} />
            </Navigation>
                <style jsx>{`
                @import url('https://fonts.googleapis.com/css?family=Open+Sans');

                body {
                   padding: 0 !important;
                   font-family: 'Open Sans', serif !important;
                   color: #101010; 
                }
                h1 {
                   font-family: 'Open Sans';
                }
`}
                </style>
            </>
        )
    }
}
