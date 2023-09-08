const Category = () => {

  const data = [
    {
      id:"1",
      icon:require('../../../assets/icons/PBB.png'),
      text:'PBB'
    },
    {
      id:"2",
      icon:require('../../../assets/icons/Listrik.png'),
      text:'Listrik'
    },
    {
      id:"3",
      icon:require('../../../assets/icons/Pulsa.png'),
      text:'Pulsa'
    },
    {
      id:"4",
      icon:require('../../../assets/icons/PDAM.png'),
      text:'PDAM'
    },
    {
      id:"5",
      icon:require('../../../assets/icons/PGN.png'),
      text:'PGN'
    },
    {
      id:"6",
      icon:require('../../../assets/icons/Televisi.png'),
      text:'TV Langganan'
    },
    {
      id:"7",
      icon:require('../../../assets/icons/Musik.png'),
      text:'Musik'
    },
    {
      id:"8",
      icon:require('../../../assets/icons/Game.png'),
      text:'Voucher Game'
    },
    {
      id:"9",
      icon:require('../../../assets/icons/Voucher Makanan.png'),
      text:'Voucher Makanan'
    },
    {
      id:"10",
      icon:require('../../../assets/icons/Kurban.png'),
      text:'Kurban'
    },
    {
      id:"11",
      icon:require('../../../assets/icons/Zakat.png'),
      text:'Zakat'
    },
    {
      id:"12",
      icon:require('../../../assets/icons/Paket Data.png'),
      text:'Paket Data'
    }
  ]

  const _renderItem = (item) => {
    return (
      <div className='col-1' key={item.id}>
        <button className='button-icon-text'> 
          <img src={item.icon} alt={`icon ${item.text}`} className='mb-2' />
          <span className='text-app-md text-center'>{item.text}</span>
        </button>
      </div>
    )
  }

  return (
    <div className="container"> 
      <div className="row">
        {data.map(item => {
          return _renderItem(item)
        })}
      </div>
    </div>
  )
}

export default Category