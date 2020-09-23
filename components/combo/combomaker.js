import React from 'react';
import {Button, Panel} from "rsuite";
import {whatsappConnector} from "../../lib/utils/contact/helpers";
import {useRouter} from "next/router";
import Link from "next/link";

const ComboMakerComponent = () => {

    return (
        <div>
            <Link href={'/combos'}>
                <Button appearance="ghost"> Crear! </Button>
            </Link>
        </div>
    );
};

export default ComboMakerComponent;
