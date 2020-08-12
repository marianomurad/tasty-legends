import { useEffect, useState } from 'react'
import Head from 'next/head'
import Post from '../components/post'

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

    const [posts, setPosts] = useState([])

    useEffect(() => {
        async function getProducts() {
            const allProducts = await fetchEntries()
            setPosts([...allProducts])
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
            {posts.length > 0
                ? posts.map(p => (
                    <Post
                        name={p.fields.name}
                        price={p.fields.price}
                        image={p.fields.image}
                        url={p.fields.url}
                    />
                ))
                : null}
        </>
    )
}

export default HomePage
