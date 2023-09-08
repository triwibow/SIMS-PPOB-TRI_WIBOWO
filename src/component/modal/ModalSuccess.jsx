import React from 'react';
import { Button, Modal, ModalBody } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { modalSuccess } from '../../store/actions/modalAction';

const ModalSuccess = (props) => {
	const {
		onClose
	} = props

	const dispatch = useDispatch();
	const { isModalSuccess, meta } = useSelector(state => state.modal)

	const closeModal = () => {
		dispatch(modalSuccess(false, null));
		if(typeof onClose == 'function'){
			onClose()
		}
	}

  return (
    <Modal className='modal' isOpen={isModalSuccess} toggle={closeModal} centered>
			<ModalBody className='text-center py-5 px-3'>
				<div className='d-block mb-4'>
					<img 
						src={require('../../assets/icons/checklist-icon.png')} 
						alt="close" 
						style={{
							width:'90px',
							height:'90px',
							objectFit:'contain'
						}}
					/>
				</div>
				<p className='mb-5'>{meta && meta.description}</p>
				<Button 
					className='button-close-modal' 
					onClick={closeModal}
					style={{width:'30%'}}
				>
					Tutup
				</Button>
			</ModalBody>
		</Modal>
  );
}

export default ModalSuccess;