import logo from '../../assets/icons/logo.png'
import loginIlust from '../../assets/images/ilustrasi-login.png'
import TextInput from '../../component/field/TextInput'

const Register = () => {
  return (
    <div className="container-fluid padding-0"> 
      <div className='row padding-0'>
        <div className="col-md-6">
          <div className='auth-wrapper'>
            <div>
              <div className='d-flex align-items-center justify-content-center mb-3'>
                <img 
                  src={logo}
                  alt='logo'
                />
                <span className='fw-bold ms-2'>SIMS PPOB</span>
              </div>
              <h1 className='fw-bold text-center mb-3'>Lengkapi Data Untuk Membuat Akun</h1>

              <form>
                <TextInput 
                  className="mb-2"
                />
                <TextInput 
                  className="mb-2"
                />
                <TextInput 
                  className="mb-2"
                />
                <TextInput 
                  className="mb-2"
                />
                <TextInput 
                  className="mb-2"
                />
              </form>
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
  )
}

export default Register