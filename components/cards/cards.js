import { Panel, Button, Message } from "rsuite";
import { cardStyles } from "./cards.style";
import {whatsappConnector} from "../../lib/utils/contact/helpers";
import { CheckoutButton } from '../checkout'

const CardsComponent = ({cards}) => {

    const handleClick = () => {
        document.location.href = whatsappConnector;
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', minHeight: '50vh'}}>
            {cards.map( card => {
                console.log('rendering');
                return (
            <div>
                <Panel key={card.fields.name} shaded bordered bodyFill style={{ width: 300, margin: 10, height: 600 }}>
                <img alt={card.fields.name} src={card.fields.image?.fields.file.url} height="400" />
                <Panel header={card.fields.name} >
                    <div style={{color: '#101010'}}> <strong>{card.fields.price} $</strong></div>
                    <br/>
                        <Button appearance="ghost" onClick={handleClick}> Comprar </Button>
                     {/*<CheckoutButton name={card.fields.name} price={card.fields.price} qty={1}/>*/}
                </Panel>
            </Panel>
            </div>
            )})}
        </div>
    );
};

export default CardsComponent;
