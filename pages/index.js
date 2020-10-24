import { useEffect, useState } from 'react'
import Head from 'next/head'
import HeroComponent from "../components/hero";
import CardsComponent from "../components/cards/cards";
// import OpinionForm from "../components/opinion";
// import ReviewsComponent from "../components/reviews";
// import ComboMakerComponent from "../components/combo/combomaker";
import {ContentfulHelperStrings} from "../lib/utils/contentful/helpers";
import {fetchByContentTypeFilterByProductType} from "./api/contentful/fetchAndFilterByProductType";
import {fetchByContentType} from "./api/contentful/fetchByContentType";
import {fetchHeroAssets} from "./api/contentful/assets";


function HomePage() {

    const [burgers, setProducts] = useState([])
    const [combos, setCombos] = useState([])
    const [hero, setAssets] = useState({})

    useEffect(() => {
        async function fetchBurgers() {
            const allBurgers = await fetchByContentTypeFilterByProductType(
                ContentfulHelperStrings.contentTypes.product,
                ContentfulHelperStrings.productTypes.burger
            );
            setProducts([...allBurgers])
        }
        async function getCombos() {
            const allCombos = await fetchByContentType(ContentfulHelperStrings.contentTypes.combos);
            console.log(allCombos);
            setCombos([...allCombos]);
        }
        async function getAssets() {
            const allAssets = await fetchHeroAssets();
            setAssets(allAssets[allAssets.length-1])
        }
        fetchBurgers()
        getCombos()
        getAssets()
    }, [])

    return (
            <div className="c-main">

            <Head>
                <title>Tasty Legends</title>
            </Head>

            <HeroComponent alt={hero?.fields?.file?.fileName} src={hero?.fields?.file?.url}/>
            <div className="c-products">
                <div className="c-products__divider">
                    <h1 className="c-products__title"> Hamburguesas </h1>
                </div>
                <CardsComponent cards={burgers}/>
            </div>

            {/*<Divider style={{ marginTop: 100}}>*/}
            {/*    <h2 style={{ color: '#101010'}}> Compra tu combo </h2>*/}
            {/*</Divider>*/}
            {/*<CardsComponent cards={combos}/>*/}
            {/*<Divider style={{ marginTop: 100}}>*/}
            {/*    <h2 style={{ color: '#101010'}}> o crea tu propio combo! </h2>*/}
            {/*</Divider>*/}
            {/*<ComboMakerComponent/>*/}


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
