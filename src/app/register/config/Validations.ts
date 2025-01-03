import * as Yup from 'yup'

export const loginSchema = Yup.object().shape({
    name: Yup.string().required('Necesitas un nombre de usuario'),
    email: Yup.string()
        .email('Ingrese una dirección de correo electrónico válida')
        .required('El correo electrónico es obligatorio'),
    password: Yup.string()
        .required('La contraseña es obligatoria')
        .matches(
            /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
            'La contraseña debe tener al menos 8 caracteres y contener al menos una letra minúscula, una letra mayúscula, un número y un carácter especial'
        ),
    repeatPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'Las contraseñas deben coincidir')
        .required('Debes repetir la contraseña'),
});
export const InitialValues = {
    name: '',
    email: '',
    password: '',
    repeatPassword: ''
}
