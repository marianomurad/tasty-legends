import { useEffect, useState } from 'react'
import Head from 'next/head'
import Product from '../components/product'
import Navigation from "../components/navigation";

const client = require('contentful').createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
})

function HomePage() {
    async function fetchEntries() {
        const entries = await client.getEntries()
        if (entries.items) return entries.items
        console.log(`Error getting Entries for ${contentType.name}.`)
    }

    const [products, setProducts] = useState([])

    useEffect(() => {
        async function getProducts() {
            const allProducts = await fetchEntries()
            setProducts([...allProducts])
        }
        getProducts()
    }, [])

    return (
        <>
            <Head>
                <title>Tasty Legends</title>
                <link
                    rel="stylesheet"
                    href="https://css.zeit.sh/v1.css"
                    type="text/css"
                />
            </Head>
            <Navigation/>
            {products.length > 0
                ? products.map((p, i) => (
                    <Product
                        key={i}
                        name={p.fields.name}
                        price={p.fields.price}
                        image={p.fields.image.fields.file.url}
                        url={p.fields.url}
                    />
                ))
                : null}
        </>
    )
}

export default HomePage
