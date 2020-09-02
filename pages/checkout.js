import {useEffect} from "react";


const CheckoutPage = () => {
    const items = [{
            title: 'Elvis',
            unit_price: 300,
            quantity: 1,
        }
    ];
    const payer = {
        email: 'marianomurad21@gmail.com'
    };


    const setMercadoPagoPreferences = async () => {
        const initPoint = await fetch('/api/mercadopago', {
            method: 'POST',
            body: JSON.stringify({items, payer}),
        }).then(res => res.json());
        const script = document.createElement('script');
        script.src = 'https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js';
        script.async = true;
        script.setAttribute('data-preference-id', initPoint.preferenceId);
        document.getElementById('mercadoForm').appendChild(script);
    };

    useEffect(() => {
        setMercadoPagoPreferences();
    }, []);

    return <form action="/procesar-pago" method="POST" id="mercadoForm" />;
};

export default CheckoutPage;
