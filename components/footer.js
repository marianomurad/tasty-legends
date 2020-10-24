import { icons } from "../lib/utils/contact/helpers";

const FooterSection = () => {

    const handleClick = (url) => {
        document.location.href = url || '';
    }
    return (
        <div className="c-footer">
            {icons.map(icon =>
                <span
                    key={icon.name}
                    className="c-footer__icon"
                    onClick={() => handleClick(icon.url)}
                />
            )}
        </div>
    );
};

export default FooterSection;
