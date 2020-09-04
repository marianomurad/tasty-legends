import { useEffect, useState } from 'react'
import Head from 'next/head'
import {fetchEntries, fetchHeroAssets} from "./api/entries";
import HeroComponent from "../components/hero";
import CardsComponent from "../components/cards/cards";
import { Divider } from "rsuite";
import ContactSection from "../components/contact";


function HomePage() {

    const [products, setProducts] = useState([])
    const [heroAssets, setHeroAssets] = useState([])
    const [hero, setAssets] = useState({})
    console.log(hero);
    useEffect(() => {
        async function getProducts() {
            const allProducts = await fetchEntries()
            setProducts([...allProducts])
        }
        async function getAssets() {
            const allAssets = await fetchHeroAssets()
            setHeroAssets([...allAssets])
            setAssets(allAssets[0])
        }
        getProducts()
        getAssets()
    }, [])

    return (
        <div style={{display: 'flex', justifyContent: 'space-around', flexDirection: 'column', alignItems: 'center'}}>
            <Head>
                <title>Tasty Legends</title>
            </Head>

            <HeroComponent alt={hero?.fields?.file?.fileName} src={hero?.fields?.file?.url}/>
            <Divider style={{ marginTop: 100}}>
                <h2 style={{ color: '#101010'}}> Hamburguesas </h2>
            </Divider>
            <CardsComponent cards={products}/>

            <Divider style={{ marginTop: 100}}>
                <h2 style={{ color: '#101010'}}> Crea tu Combo </h2>
            </Divider>
        </div>
    )
}

export default HomePage
