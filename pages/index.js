import { useEffect, useState } from 'react'
import Head from 'next/head'
import { fetchEntries } from "./api/entries";
import HeroComponent from "../components/hero";
import CardsComponent from "../components/cards/cards";
import { Divider } from "rsuite";
import ContactSection from "../components/contact";


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
        <div style={{display: 'flex', justifyContent: 'space-around', flexDirection: 'column', alignItems: 'center'}}>
            <Head>
                <title>Tasty Legends</title>
            </Head>

            {/*<HeroComponent alt={hero?.fields.name} src={hero?.fields.image.fields.file.url}/>*/}
            <Divider>
                <h2 style={{ color: '#101010'}}> Productos </h2>
            </Divider>
            <CardsComponent cards={products}/>
            <ContactSection />
        </div>
    )
}

export default HomePage
