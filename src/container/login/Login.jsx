import { useEffect } from 'react'
import logo from '../../assets/icons/logo.png'
import loginIlust from '../../assets/images/ilustrasi-login.png'
import TextField from '../../component/field/TextField'
import PasswordField from '../../component/field/PasswordField'
import ButtonPrimary from '../../component/button/ButtonPrimary'
import TextButton from '../../component/button/TextButton'
import { IoPersonOutline, IoLockClosedOutline } from 'react-icons/io5'
import { useFormik } from 'formik';
import { loginSchema } from '../../schema/loginSchema'
import { modalError } from '../../store/actions/modalAction'
import ModalError from '../../component/modal/ModalError'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../store/actions/loginAction'

const Login = () => {
  const dispatch = useDispatch()
  const { status, message } = useSelector(state => state.login)

  const onSubmit = (val) => {
    const payload = {
      email:val.email,
      password:val.password
    }

    dispatch(login(payload))
  }

  const form = useFormik({
		initialValues:{
      email:'',
      password:'',
    },
    validationSchema:loginSchema,
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
          <div className="col-md-6 padding-0">
            <div className='auth-wrapper'>
              <div className='d-flex align-items-center justify-content-center mb-3'>
                <img 
                  src={logo}
                  alt='logo'
                />
                <span className='fw-bold ms-2'>SIMS PPOB</span>
              </div>
              <h1 className='fw-bold text-center mb-3'>Masuk atau buat akun untuk memulai</h1>

              <form className='form-auth'>
                <TextField 
                  wrapperClass="mb-3"
                  placeholder="masukkan email anda"
                  prefixIcon={<IoPersonOutline />}
                  onChange={form.setFieldValue}
                  name="email"
                  value={form.values.email}
                  touched={form.touched.email}
                  error={form.errors.email}
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
                <ButtonPrimary 
                  type="button"
                  text="Masuk"
                  onClick={form.handleSubmit}
                  loading={(status == 'loading')}
                />

                <div className='d-flex align-items-center justify-content-center mt-4'>
                  <span className='text-app-primary text-app-sm'>
                    belum punya akun ? registrasi 
                  </span>
                  <TextButton 
                    text="di sini"
                    className="text-app-danger text-app-sm"
                  />
                </div>
              </form>
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

export default Login