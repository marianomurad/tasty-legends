import {useState} from 'react';
import {Form, FormGroup, ControlLabel, FormControl, Button, Schema} from "rsuite";
import TextField from "./textfield";

const { StringType } = Schema.Types;
const model = Schema.Model({
    name: StringType().isRequired('Por favor ingrese un nombre.'),
    email: StringType()
        .isEmail('Por favor ingrese un email valido.')
        .isRequired('Este campo es obligatorio, por favor ingrese un email.'),
    comment: StringType().isRequired('Por favor ingrese un comentario')
});


const OpinionForm = () => {
    const [formValue, setFormValue] = useState({name: '', email: '', comment: ''})
    const [formError, setFormError] = useState({})

    const handleSubmit = () => console.log(formValue);
    return (
        <Form style={{ marginBottom: 30 }}
              onChange={formValue => setFormValue({ formValue })}
              onCheck={formError => setFormError({ formError })}
              model={model}
        >
            <TextField name="name" label="Nombre" />
            <TextField name="email" label="Email" />
                <FormGroup>
                <ControlLabel>Comentarios</ControlLabel>
                <FormControl rows={5} name="comment" componentClass="textarea"/>
            </FormGroup>
            <FormGroup>
                    <Button appearance="primary" onClick={handleSubmit}>Enviar</Button>
            </FormGroup>
        </Form>
    );
};

export default OpinionForm;
