import { formatRupiah } from "../../../helper/formatter"
import moment from "moment"

const CardTransaction = (props) => {
  const {item} = props
  return (
    <div className="card-transaction">
      <div>
        {item.transaction_type == 'PAYMENT'? (
          <p className="text-app-danger text-head-4 mb-3 fw-bold">- {formatRupiah(item.total_amount)}</p>
        ):(
          <p className="text-app-success text-head-4 mb-3 fw-bold">+ {formatRupiah(item.total_amount)}</p>
        )}
        
        <p className="text-app-secondary text-app-sm">{moment(item.created_on).format('DD MMMM YYYY HH:mm:ss')}</p>
      </div>
      <span className="text-app-secondary text-app-sm">{item.description}</span>
    </div>
  )
}

export default CardTransaction