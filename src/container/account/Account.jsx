import { useEffect, useState } from 'react'
import { IoAtOutline, IoPersonOutline } from 'react-icons/io5'
import TextField from '../../component/field/TextField'
import ButtonPrimary from '../../component/button/ButtonPrimary'
import ButtonOutline from '../../component/button/ButtonOutline'
import PhotoProfile from './component/PhotoProfile'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../../store/actions/userAction'
import { modalError, modalSuccess } from '../../store/actions/modalAction'
import ModalError from '../../component/modal/ModalError'
import ModalSuccess from '../../component/modal/ModalSuccess'
import { useFormik } from 'formik';
import { editProfile, resetStatus } from '../../store/actions/userAction'
import { accountSchema } from '../../schema/accountSchema'
import { logout } from '../../store/actions/authAction'

const Account = () => {
	const dispatch = useDispatch()
	const [isEdit, setEdit] = useState(false)
	const { user, status, message } = useSelector(state => state.user)

	useEffect(() => {
		dispatch(fetchData())
	}, [])	

	const onSubmit = (val) => {
    const payload = {
			email:val.email,
      first_name:val.first_name,
      last_name:val.last_name
    }
		dispatch(editProfile(payload))
  }

  const form = useFormik({
		initialValues:{
      email:user?.email || "",
      first_name:user?.first_name || "",
      last_name:user?.last_name || "",
    },
    validationSchema:accountSchema,
		onSubmit:onSubmit
	});

	useEffect(() => {
    if(status == 'success'){
			dispatch(modalSuccess(true, {description:message}))
			setEdit(false)
		}

    if(status == 'error'){
			dispatch(modalError(true, {description:message}))
		}
  }, [status])

	return(
		<>
			<div className="container mt-5">
				<div className="row">
					<div className="col-md-6 offset-md-3">
						<form>
							<PhotoProfile 
								className="mb-4 mx-auto"
								user={user}
							/>
							<TextField 
								wrapperClass="mb-3"
								placeholder="masukkan email anda"
								prefixIcon={<IoAtOutline />}
								label="Email"
								onChange={form.setFieldValue}
								name="email"
								value={form.values.email}
								touched={form.touched.email}
								error={form.errors.email}
								disabled
								
							/>
							<TextField 
								wrapperClass="mb-3"
								placeholder="nama depan"
								prefixIcon={<IoPersonOutline />}
								label="Nama Depan"
								onChange={form.setFieldValue}
								name="first_name"
								value={form.values.first_name}
								touched={form.touched.first_name}
								error={form.errors.first_name}
								disabled={!isEdit}
							/>
							<TextField 
								wrapperClass="mb-5"
								placeholder="nama belakang"
								prefixIcon={<IoPersonOutline />}
								label="Nama Belakang"
								onChange={form.setFieldValue}
								name="last_name"
								value={form.values.last_name}
								touched={form.touched.last_name}
								error={form.errors.last_name}
								disabled={!isEdit}
							/>

							{!isEdit ? (
								<>
									<ButtonOutline 
										type="button"
										text="Edit Profile"
										className="mb-3"
										onClick={()=> setEdit(true)}
									/>

									<ButtonPrimary 
										type="button"
										text="Logout"
										disabled={false}
										onClick={() => dispatch(logout())}
									/>
								</>
							):(
								<ButtonPrimary 
									type="button"
									text="Simpan"
									disabled={false}
									onClick={form.handleSubmit}
									loading={(status == 'loading')}
								/>
							)}
						</form>
					</div>
				</div>
			</div>
			<ModalError 
				onClose={() => dispatch(resetStatus())}
			/>
			<ModalSuccess 
				onClose={() => dispatch(resetStatus())}
			/>
		</>
	)   
}

export default Account