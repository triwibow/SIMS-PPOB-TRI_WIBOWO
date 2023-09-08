import logo from '../../assets/icons/logo.png'
import loginIlust from '../../assets/images/ilustrasi-login.png'
import TextField from '../../component/field/TextField'
import PasswordField from '../../component/field/PasswordField'
import { IoAtOutline, IoPersonOutline, IoLockClosedOutline } from 'react-icons/io5'
import ButtonPrimary from '../../component/button/ButtonPrimary'
import TextButton from '../../component/button/TextButton'

const Register = () => {
  return (
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
            <form className='form-auth'>
              <TextField 
                wrapperClass="mb-3"
                placeholder="masukkan email anda"
                prefixIcon={<IoAtOutline />}
              />
              <TextField 
                wrapperClass="mb-3"
                placeholder="nama depan"
                prefixIcon={<IoPersonOutline />}
              />
              <TextField 
                wrapperClass="mb-3"
                placeholder="nama belakang"
                prefixIcon={<IoPersonOutline />}
              />
              <PasswordField 
                wrapperClass="mb-3"
                placeholder="password"
                prefixIcon={<IoLockClosedOutline />}
              />
              <PasswordField
                wrapperClass="mb-5"
                placeholder="konfirmasi password"
                prefixIcon={<IoLockClosedOutline />}
              />
              
              <ButtonPrimary 
                type="button"
                text="Registrasi"
              />

              <div className='d-flex align-items-center justify-content-center mt-4'>
                <span className='text-app-primary text-app-sm'>
                  sudah punya akun ? login
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
  )
}

export default Register