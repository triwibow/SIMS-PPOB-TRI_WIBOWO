import React from 'react'
import PhotoProfile from './component/PhotoProfile'

const Dashboard = () => {
  return(
    <div className='container mt-4'>
      <div className='row'>
        <div className='col-md-4'>
          <PhotoProfile />
          <p className='mb-3 text-app-dark text-head-4'>Selamat Datang,</p>
          <h1 className='text-app-dark text-head-2 fw-bold'>Kristanto Wibowo</h1>
        </div>
        <div className='col-md-8'>

        </div>
      </div>
    </div>
  )
}

export default Dashboard