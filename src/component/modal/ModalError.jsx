import React from 'react';
import { Button, Modal, ModalBody } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { modalError } from '../../store/actions/modalAction';

const ModalError = (props) => {
	const {
		onClose
	} = props

	const dispatch = useDispatch();
	const { isModalError, meta } = useSelector(state => state.modal)

	const closeModal = () => {
		dispatch(modalError(false, null));
		if(typeof onClose == 'function'){
			onClose()
		}
	}

  return (
    <Modal className='modal' isOpen={isModalError} toggle={closeModal} centered>
			<ModalBody className='text-center py-5 px-3'>
				<div className='d-block mb-4'>
					<img 
						src={require('../../assets/icons/circle-x-red.png')} 
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

export default ModalError;