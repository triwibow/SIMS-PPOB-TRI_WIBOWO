import * as Yup from 'yup'

export const registerSchema = Yup.object().shape({
	email:Yup.string().email('email tidak valid').required('wajib diisi'),
	first_name:Yup.string().required('wajib diisi'),
    last_name:Yup.string().required('wajib diisi'),
	password:Yup.string().required('wajib diisi').test('minLength','Password minimal 6 karakter', (val) => {
    return val.length >= 8
  }),
	confirm_password:Yup.string().required('wajib diisi').oneOf([Yup.ref("password")], "Konfirmasi password tidak sesuai")
});