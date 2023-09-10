import * as Yup from 'yup'

export const accountSchema = Yup.object().shape({
	first_name:Yup.string().required('wajib diisi'),
  last_name:Yup.string().required('wajib diisi'),
});