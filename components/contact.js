import { icons } from "../lib/utils/contact/helpers";

const ContactSection = () => {

    const handleClick = (url) => {
        document.location.href = url || '';
    }
    return (
        <div style={{backgroundColor: '#101010', width: '100%', display: 'flex', justifyContent: 'center', bottom: 0}}>
            {icons.map(icon =>
                <span
                    key={icon.name}
                    style={{margin: 20, color: 'white'}}
                    onClick={() => handleClick(icon.url)}
                />
            )}
        </div>
    );
};

export default ContactSection;
