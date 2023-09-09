import * as Yup from 'yup'

export const paySchema = Yup.object().shape({
	service_code:Yup.string().required('wajib diisi'),
});