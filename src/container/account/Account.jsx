import { IoAtOutline, IoPersonOutline, IoLockClosedOutline } from 'react-icons/io5'
import TextField from '../../component/field/TextField'
import ButtonPrimary from '../../component/button/ButtonPrimary'
import ButtonOutline from '../../component/button/ButtonOutline'
import PhotoProfile from './component/PhotoProfile'

const Account = () => {

	console.log(process.env.REACT_APP_API_URL)
	return(
		<div className="container mt-5">
			<div className="row">
				<div className="col-md-6 offset-md-3">
					<form>
						<PhotoProfile 
							className="mb-4 mx-auto"
						/>
						<TextField 
							wrapperClass="mb-3"
							placeholder="masukkan email anda"
							prefixIcon={<IoAtOutline />}
							label="Email"
						/>
						<TextField 
							wrapperClass="mb-3"
							placeholder="nama depan"
							prefixIcon={<IoPersonOutline />}
							label="Nama Depan"
						/>
						<TextField 
							wrapperClass="mb-5"
							placeholder="nama belakang"
							prefixIcon={<IoPersonOutline />}
							label="Nama Belakang"
						/>

						<ButtonOutline 
							type="button"
							text="Edit"
							className="mb-3"
						/>

						<ButtonPrimary 
							type="button"
							text="Simpan"
							disabled={false}
						/>
					</form>
				</div>
			</div>
		</div>
	)   
}

export default Account