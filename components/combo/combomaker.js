import {whatsappConnector} from "../../lib/utils/contact/helpers";
import Link from "next/link";

const ComboMakerComponent = () => {

    return (
        <div>
            <Link href={'/combos'}>
                <button appearance="ghost"> Crear! </button>
            </Link>
        </div>
    );
};

export default ComboMakerComponent;
