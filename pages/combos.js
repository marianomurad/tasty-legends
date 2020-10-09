import React from 'react';
import Head from "next/head";


const Combos = () => {
    return (
        <>
            <Head>
                <title>Tasty Legends</title>
            </Head>
        <div style={{height: '100vh'}}>
            <h1>Crea tu combo!</h1>
            <ul>
                <li>
                    <div>
                    item1
                    {/*    icono para borrar*/}
                    </div>
                </li>
                <li>
                    <div>
                        item2
                        {/*    icono para borrar*/}
                    </div>
                </li>
                <li>
                    <div>
                        item3
                        {/*    icono para borrar*/}
                    </div>
                </li>
            </ul>
            <div>
                <div>
                    <div  collapsible bordered header="Card title">
                        <p>asdasd</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Combos;
