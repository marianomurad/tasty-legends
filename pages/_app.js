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
                body {
                   padding: 0 !important; 
                }`}
                </style>
            </>
        )
    }
}
