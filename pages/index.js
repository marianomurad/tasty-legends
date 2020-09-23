import { useEffect, useState } from 'react'
import Head from 'next/head'
import { fetchHeroAssets, fetchProducts } from "./api/entries";
import HeroComponent from "../components/hero";
import CardsComponent from "../components/cards/cards";
import { Divider } from "rsuite";
// import OpinionForm from "../components/opinion";
// import ReviewsComponent from "../components/reviews";
import ComboMakerComponent from "../components/combo/combomaker";


function HomePage() {

    const [products, setProducts] = useState([])
    const [hero, setAssets] = useState({})

    useEffect(() => {
        async function getProducts() {
            const allProducts = await fetchProducts();
            setProducts([...allProducts])
        }
        async function getAssets() {
            const allAssets = await fetchHeroAssets()
            setAssets(allAssets[allAssets.length-1])
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
                <h2 style={{ color: '#101010'}}> Crea tu combo </h2>
            </Divider>
            <ComboMakerComponent/>


            {/*<Divider style={{ marginTop: 100}}>*/}
            {/*    <h2 style={{ color: '#101010'}}> Opiniones! </h2>*/}
            {/*</Divider>*/}
            {/*<ReviewsComponent/>*/}

            {/*<Divider style={{ marginTop: 100}}>*/}
            {/*    <h2 style={{ color: '#101010'}}> Deja la tuya </h2>*/}
            {/*</Divider>*/}
            {/*<OpinionForm/>*/}

        </div>
    )
}

export default HomePage
