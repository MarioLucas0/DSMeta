import axios from 'axios';
import { toast } from 'react-toastify';
import { BASE_URL } from '../../../util/request';
import icon from '../../img/icon.png'
import './style.css'


type Props = {
  saleId: number;
}

function NotificationButton( {saleId } : Props){

 function handleClick(id : number) {
    axios.get(`${BASE_URL}/sales/${id}/notification`)
    .then(response =>  {
       toast.info("SMS enviado com Sucesso!")
    });
 }

    return (
        <div className="dsmeta-red-btn" onClick={() => handleClick(saleId)}>
        <img src={icon} alt="Notificar" />
      </div>
    )
}
export default NotificationButton;