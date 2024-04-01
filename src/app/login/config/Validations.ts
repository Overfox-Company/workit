import * as Yup from 'yup'

export const loginSchema = Yup.object().shape({
    email: Yup.string()
        .email('Ingrese una dirección de correo electrónico válida')
        .required('El correo electrónico es obligatorio'),
    password: Yup.string()
        .required('La contraseña es obligatoria')
        .matches(
            /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
            'La contraseña debe tener al menos 8 caracteres y contener al menos una letra minúscula, una letra mayúscula, un número y un carácter especial'
        ),
});
export const InitialValues = {
    email: '',
    password: ''
}
