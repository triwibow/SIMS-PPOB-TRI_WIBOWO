import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ModalError = () => {
  const [modal, setModal] = useState(true);

  const toggle = () => setModal(!modal);

  return (
    <Modal isOpen={modal} toggle={toggle} centered>
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
				<p className='mb-5'>Email sudah terdaftar</p>
				<Button 
					className='button-close-modal' 
					onClick={toggle}
					style={{width:'30%'}}
				>
					Tutup
				</Button>
			</ModalBody>
		</Modal>
  );
}

export default ModalError;