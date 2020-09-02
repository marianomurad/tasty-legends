import React from 'react';
import {Icon} from "rsuite";
import { icons } from "../lib/utils/contact/helpers";

const ContactSection = () => {

    const handleClick = (url) => {
        document.location.href = url || '';
    }
    return (
        <div style={{backgroundColor: '#101010', width: '100%', display: 'flex', justifyContent: 'center', bottom: 0}}>
            {icons.map(icon =>
                <Icon style={{margin: 20, color: 'white'}} size="3x" icon={icon.name} onClick={() => handleClick(icon.url)}/>
            )}
        </div>
    );
};

export default ContactSection;
