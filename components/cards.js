import { Panel } from "rsuite";

const CardsComponent = ({cards}) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap'}}>
            {cards.map( card => (
            <Panel shaded bordered bodyFill style={{ width: 300, margin: 10 }}>
                <img alt={card.fields.name} src={card.fields.image.fields.file.url} height="400" />
                <Panel header={card.fields.name}>
                    <p>
                        {card.fields.price} $
                    </p>
                    <button> Comprar </button>
                </Panel>
            </Panel>
            ))}
        </div>
    );
};

export default CardsComponent;
