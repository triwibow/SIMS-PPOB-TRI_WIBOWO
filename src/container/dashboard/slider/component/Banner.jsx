import React from "react"

const Banner = (props) => {

  const { data } = props

  return (
		<img 
			src={data.banner_image} 
			alt="banner"
			style={{cursor:'grab'}}
			className="img-fluid"
		/>
  );
}

export default Banner