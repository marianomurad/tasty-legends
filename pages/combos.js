import React from 'react';
import Head from "next/head";
import { Row, Col, Panel } from "rsuite";


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
            <Row>
                <Col md={6} sm={12}>
                    <Panel  collapsible bordered header="Card title">
                        <p>asdasd</p>
                    </Panel>
                </Col>
                <Col md={6} sm={12}>
                    <Panel  bordered header="Card title">
                        <p>asdasd</p>
                    </Panel>
                </Col>
                <Col md={6} sm={12}>
                    <Panel  bordered header="Card title">
                        <p>asdasd</p>
                    </Panel>
                </Col>
                <Col md={6} sm={12}>
                    <Panel bordered header="Card title">
                        <p>asdasd</p>
                    </Panel>
                </Col>
            </Row>
        </div>
        </>
    );
};

export default Combos;
