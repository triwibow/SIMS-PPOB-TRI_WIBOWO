import * as Yup from 'yup'

export const loginSchema = Yup.object().shape({
	email:Yup.string().email('email tidak valid').required('wajib diisi'),
	password:Yup.string().required('wajib diisi')
});