import * as Yup from 'yup'
import { deformatRupiah } from '../helper/formatter';

export const topupSchema = Yup.object().shape({
	top_up_amount:Yup.string().required('wajib diisi').test('min','Nominal minimal Rp. 10.000,00', (val) => {
    return deformatRupiah(val) >= 10000
  }).test('max','Maksimal Rp. 1.000.000,00', (val) => {
    return deformatRupiah(val) <= 1000000
  }),
});