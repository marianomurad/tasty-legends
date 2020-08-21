import React, {useEffect, useState} from 'react';
import {fetchEntries} from "./api/entries";
import Head from "next/head";
import CarouselComponent from "../components/carousel";
import CardsComponent from "../components/cards";

const V1 = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        async function getProducts() {
            const allProducts = await fetchEntries()
            setProducts([...allProducts])
        }
        getProducts()
    }, [])

    return (
        <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
            <Head>
                <title>Tasty Legends</title>
            </Head>
            {/*<HeroComponent alt={hero?.fields.name} src={hero?.fields.image.fields.file.url}/>*/}

            <h2> Combos </h2>
            <CarouselComponent products={products}/>
        </div>
    )
}

export default V1;
