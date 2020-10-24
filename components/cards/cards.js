import {whatsappConnector} from "../../lib/utils/contact/helpers";
import { CheckoutButton } from '../checkout'
import Router from 'next/router'


const CardsComponent = ({cards}) => {



    const handleClick = () => {
        document.location.href = whatsappConnector;
    }
    const handleCardClick = (name, price, url, image, ingredients) => {
        Router.push({
            pathname: url,
            query: { name, price, url, image, ingredients },
        })
    }

    return (
        <div className="c-products__cards">
            {cards.map(
                card => {
                    const ingredients = card.fields.ingredients.content[0].content[0].value; //this is horrible pls replace
                    return <div
                            key={card.fields.name}
                            className="col-9 col-small-7 col-large-2"
                        >
                            <div className="c-products__c-card">
                                <img alt={card.fields.name} src={card.fields.image?.fields.file.url} className="c-products__c-card-image" />
                                <h4 className="c-products__c-card-title">{card.fields.name}</h4>
                                <div className="c-products__c-card-main">
                                    <span>{card.fields.price} $</span>
                                    <div className="c-products__c-card-btn-group">
                                        <button className="c-products__c-card-btn" onClick={handleClick}> Comprar </button>
                                        <button className="c-products__c-card-btn c-products__c-card-btn__secondary"
                                                onClick={() => handleCardClick(
                                                    card.fields.name,
                                                    card.fields.price,
                                                    card.fields.url,
                                                    card.fields.image?.fields.file.url,
                                                    ingredients)
                                                }
                                        > Ver más </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                }
            )}
        </div>
    );
};

export default CardsComponent;
