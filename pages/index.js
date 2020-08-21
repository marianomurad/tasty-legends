import { useEffect, useState } from 'react'
import Head from 'next/head'
import { fetchEntries } from "./api/entries";
import HeroComponent from "../components/hero";
import CarouselComponent from "../components/carousel";
import CardsComponent from "../components/cards";
import {useRouter} from "next/router";


function HomePage() {

    const router = useRouter();

    const [products, setProducts] = useState([])

    useEffect(() => {
        async function getProducts() {
            const allProducts = await fetchEntries()
            setProducts([...allProducts])
        }
        getProducts()
    }, [])

    return (
        <div style={{display: 'flex', justifyContent: 'space-around', flexDirection: 'row', alignItems: 'center'}}>
            <Head>
                <title>Tasty Legends</title>
            </Head>
            {/*<HeroComponent alt={hero?.fields.name} src={hero?.fields.image.fields.file.url}/>*/}
            <button onClick={() => router.push('/v1')}> v1</button>|
            <button onClick={() => router.push('/v2')}> v2</button>
        </div>
    )
}

export default HomePage
