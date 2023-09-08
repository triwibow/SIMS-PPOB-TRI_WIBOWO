import { useEffect } from 'react'
import logo from '../../assets/icons/logo.png'
import loginIlust from '../../assets/images/ilustrasi-login.png'
import TextField from '../../component/field/TextField'
import PasswordField from '../../component/field/PasswordField'
import { IoAtOutline, IoPersonOutline, IoLockClosedOutline } from 'react-icons/io5'
import ButtonPrimary from '../../component/button/ButtonPrimary'
import TextButton from '../../component/button/TextButton'
import { useFormik } from 'formik';
import { registerSchema } from '../../schema/registerSchema'
import { register } from '../../store/actions/registerAction'
import { modalError } from '../../store/actions/modalAction'
import { useDispatch, useSelector } from 'react-redux'
import ModalError from '../../component/modal/ModalError'

const Register = () => {

  const dispatch = useDispatch()
  const { status, message } = useSelector(state => state.register)

  const onSubmit = (val) => {
    const payload = {
      email:val.email,
      first_name:val.first_name,
      last_name:val.last_name,
      password:val.password
    }

    dispatch(register(payload))
  }

  const form = useFormik({
		initialValues:{
      email:'',
      first_name:'',
      last_name:'',
      password:'',
      confirm_password:''
    },
    validationSchema:registerSchema,
		onSubmit:onSubmit
	});

  useEffect(() => {
    if(status == 'error'){
			dispatch(modalError(true, {description:message}))
		}
  }, [status])

  return (
    <>
      <div className="container-fluid padding-0"> 
        <div className='row padding-0'>
          <div className="col-md-6">
            <div className='auth-wrapper'>
              <div className='d-flex align-items-center justify-content-center mb-3'>
                <img 
                  src={logo}
                  alt='logo'
                />
                <span className='fw-bold ms-2'>SIMS PPOB</span>
              </div>
              <h1 className='fw-bold text-center mb-3'>Lengkapi Data Untuk Membuat Akun</h1>
              <div className='form-auth'>
                <TextField 
                  wrapperClass="mb-3"
                  placeholder="masukkan email anda"
                  prefixIcon={<IoAtOutline />}
                  onChange={form.setFieldValue}
                  name="email"
                  value={form.values.email}
                  touched={form.touched.email}
                  error={form.errors.email}
                />
                <TextField 
                  wrapperClass="mb-3"
                  placeholder="nama depan"
                  prefixIcon={<IoPersonOutline />}
                  onChange={form.setFieldValue}
                  name="first_name"
                  value={form.values.first_name}
                  touched={form.touched.first_name}
                  error={form.errors.first_name}
                />
                <TextField 
                  wrapperClass="mb-3"
                  placeholder="nama belakang"
                  prefixIcon={<IoPersonOutline />}
                  onChange={form.setFieldValue}
                  name="last_name"
                  value={form.values.last_name}
                  touched={form.touched.last_name}
                  error={form.errors.last_name}
                />
                <PasswordField 
                  wrapperClass="mb-3"
                  placeholder="password"
                  prefixIcon={<IoLockClosedOutline />}
                  onChange={form.setFieldValue}
                  name="password"
                  value={form.values.password}
                  touched={form.touched.password}
                  error={form.errors.password}
                />
                <PasswordField
                  wrapperClass="mb-5"
                  placeholder="konfirmasi password"
                  prefixIcon={<IoLockClosedOutline />}
                  onChange={form.setFieldValue}
                  name="confirm_password"
                  value={form.values.confirm_password}
                  touched={form.touched.confirm_password}
                  error={form.errors.confirm_password}
                />
                
                <ButtonPrimary 
                  type="button"
                  text="Registrasi"
                  onClick={form.handleSubmit}
                  loading={(status == 'loading')}
                />

                <div className='d-flex align-items-center justify-content-center mt-4'>
                  <span className='text-app-primary text-app-sm'>
                    sudah punya akun ? login
                  </span>
                  <TextButton 
                    text="di sini"
                    className="text-app-danger text-app-sm ms-1"
                  />
                </div>

              </div>
            </div>
          </div>
          <div className="col-md-6 padding-0">
            <img 
              className='login-ilust padding-0'
              src={loginIlust}
            />
          </div>
        </div>
      </div>
      <ModalError />
    </>
  )
}

export default Register