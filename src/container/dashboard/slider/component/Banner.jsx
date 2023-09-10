import React from "react"
import { IoHeartOutline, IoTimeOutline } from 'react-icons/io5'

const CardProduct = (props) => {

  const { data } = props

  return (
    <div className="card-product">
      <div className="card-product-body">
        <div className="card-product-thumbnail mb-4">
          <button className="card-product-like">
            <IoHeartOutline /> 24
          </button>
          
          <span className="card-product-timer">
            <IoTimeOutline className="me-2" /> 20:12:10
          </span>
        </div>
        <h3 className="text-primary fw-bold mb-2">{data.user}</h3>
        <div className="d-flex align-items-center">
         
          <small className="text-sm fw-bold ms-2">{data.username}</small>
        </div>
      </div>
      <div className="card-product-footer">
        <div>
          <small className="text-xs mb-1 d-block">CURRENT BID</small>
          <span className="text-md fw-bold">{data.current_bid}</span>
        </div>
      </div>
    </div>
  );
}

export default CardProduct