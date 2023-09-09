import React, { useEffect, useState } from 'react'
import { IoCashOutline } from 'react-icons/io5'
import BannerSaldo from '../../component/banner/BannerSaldo'
import ButtonPrimary from '../../component/button/ButtonPrimary'
import TextMaskField from '../../component/field/TextMaskField'
import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { topupSchema } from '../../schema/topupSchema'
import { formatRupiah, deformatRupiah } from '../../helper/formatter'
import { topup } from '../../store/actions/topupAction'
import { modalError, modalSuccess } from '../../store/actions/modalAction'
import ModalError from '../../component/modal/ModalError'
import ModalSuccess from '../../component/modal/ModalSuccess'

const TopUp = () => {
  const dispatch = useDispatch()
  const { status, message } = useSelector(state => state.topup)
  const [activeNominal, setActiveNominal] = useState('')

  const onSubmit = (val) => {
    const payload = {
      top_up_amount:parseInt(deformatRupiah(val.top_up_amount)),
    }

    dispatch(topup(payload))

    form.setFieldValue('top_up_amount','', false)
  }

  const form = useFormik({
		initialValues:{
      top_up_amount:'',
    },
    validationSchema:topupSchema,
		onSubmit:onSubmit
	});

  const nominal = [
    {
      id:'1',
      text:"Rp 10.000",
      value:10000
    },
    {
      id:'2',
      text:"Rp 20.000",
      value:20000
    },
    {
      id:'3',
      text:"Rp 50.000",
      value:50000
    },
    {
      id:'4',
      text:"Rp 100.000",
      value:100000
    },
    {
      id:'5',
      text:"Rp 250.000",
      value:250000
    },
    {
      id:'6',
      text:"Rp 500.000",
      value:500000
    }
  ]

  const handleClickNominal = (id, value) => {
    setActiveNominal(id)
    form.setFieldValue('top_up_amount', formatRupiah(value), false)
  }

  const checkMatchNominal = () => {
    const check = nominal.filter(item => item.value == deformatRupiah(form.values.top_up_amount))
    
    if(check.length > 0){
      setActiveNominal(check[0].id)
    } else {
      setActiveNominal('')
    }
  }

  useEffect(() => {
    checkMatchNominal()
  }, [form.values.top_up_amount])

  useEffect(() => {
    if(status == 'success'){
      dispatch(modalSuccess(true, {description:message}))
    }

    if(status == 'error'){
      dispatch(modalError(true, {description:message}))
    }
  }, [status])

  const _renderNominal = (item) => {
    return (
      <div className='col-md-4 mb-2' key={item.id}>
        <button 
          className={`button-outline-white text-app-primary text-app-md ${item.id == activeNominal && ('active')}`}
          onClick={() => {
            handleClickNominal(item.id, item.value)
          }}
        >
          {item.text}
        </button>
      </div>
    )
  } 

  return(
    <>
      <BannerSaldo /> 
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 mb-5'> 
            <p className='mb-3 text-app-dark text-head-4'>Silahkan masukan</p>
            <h1 className='text-app-dark text-head-2 fw-bold'>Nominal Top Up</h1>
          </div>
          <div className='col-md-7'>
            <TextMaskField 
              type="number"
              wrapperClass="mb-3"
              placeholder="masukkan nominal Top Up"
              prefixIcon={<IoCashOutline />}
              name="top_up_amount"
              onChange={form.setFieldValue}
              value={form.values.top_up_amount}
              touched={form.touched.top_up_amount}
              error={form.errors.top_up_amount}
              mask={formatRupiah}
              demask={deformatRupiah}
            />        
            <ButtonPrimary 
              type="button"
              text="Top Up"
              onClick={form.handleSubmit}
              loading={status == 'loading'}
              disabled={form.values.top_up_amount == ''}
            />
          </div>
          <div className='col-md-5'>
            <div className='row'>
              {nominal.map(item => {
                return _renderNominal(item)
              })}
            </div>
          </div>
        </div>
      </div>
      <ModalError />
      <ModalSuccess />
    </>

  )
}

export default TopUp