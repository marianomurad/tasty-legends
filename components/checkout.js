import {useEffect} from "react";


export const CheckoutButton = ({name = '', price = 0, qty = 0}) => {
    const items = [{
            title: name,
            unit_price: price,
            currency_id: 'ARS',
            quantity: qty,
        },
    ];


    const setMercadoPagoPreferences = async () => {
        const initPoint = await fetch('/api/mercadopago', {
            method: 'POST',
            body: JSON.stringify({items}),
        }).then(res => res.json());
        const script = document.createElement('script');
        script.src = 'https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js';
        script.async = true;
        script.setAttribute('data-preference-id', initPoint.preferenceId);
        script.setAttribute('data-button-label', 'Comprar');
        script.setAttribute('data-elements-color', '#8e44ad');
        document.getElementById('mercadoForm').appendChild(script);
    };

    useEffect(() => {
        setMercadoPagoPreferences();
    }, []);

    return <form action="/procesar-pago" method="POST" id="mercadoForm" />;
};

