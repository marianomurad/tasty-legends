import { useEffect, useState } from 'react'
import Head from 'next/head'
import Product from '../components/product'
import { fetchEntries } from "./api/entries";


function HomePage() {

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
