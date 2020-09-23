import {FormGroup, ControlLabel, FormControl, Schema} from "rsuite";


function TextField(props) {
    const { name, label, accepter, ...rest } = props;
    return (
        <FormGroup>
            <ControlLabel>{label} </ControlLabel>
            <FormControl name={name} accepter={accepter} {...rest} />
        </FormGroup>
    );
}

export default TextField;
