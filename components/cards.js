import { Panel, Button, Message } from "rsuite";
import { cardStyles } from "./cards.style";

const CardsComponent = ({cards}) => {

    const handleClick = () => {
        document.location.href = 'https://api.whatsapp.com/send?phone=+5491160047286';
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}>
            {cards.map( card => (
            <Panel key={card.fields.name} shaded bordered bodyFill style={{ width: 300, margin: 10 }}>
                <img alt={card.fields.name} src={card.fields.image.fields.file.url} height="400" />
                <Panel header={card.fields.name} >
                    <Message style={cardStyles.msgStyles} type="success" title={`${card.fields.price} $`} />
                        <Button appearance="ghost" onClick={handleClick}> Comprar </Button>
                </Panel>
            </Panel>
            ))}
        </div>
    );
};

export default CardsComponent;
