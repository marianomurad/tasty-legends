import {whatsappConnector} from "../../lib/utils/contact/helpers";
import { CheckoutButton } from '../checkout'

const CardsComponent = ({cards}) => {

    const handleClick = () => {
        document.location.href = whatsappConnector;
    }

    return (
        <div className="c-products__cards">
            {cards.map(
                card =>
                        <div key={card.fields.name} className="col-9 col-small-7 col-large-2">
                            <div className="c-products__c-card">
                                <img alt={card.fields.name} src={card.fields.image?.fields.file.url} className="c-products__c-card-image" />
                                <h4 className="c-products__c-card-title">{card.fields.name}</h4>
                                <div className="c-products__c-card-main">
                                    <span>{card.fields.price} $</span>
                                    <button className="c-products__c-card-btn" onClick={handleClick}> Comprar </button>
                                </div>
                            </div>
                        </div>
            )}
        </div>
    );
};

export default CardsComponent;
