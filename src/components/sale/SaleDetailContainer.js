import React, { useState } from 'react';
import SaleDetail from './SaleDetail';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../utils/firebase';
import { BsSearch } from 'react-icons/bs';

const SaleDetailContainer = () => {

  const [ loading, setLoading ] = useState(true);
  const [ orderId, setOrderId ] = useState("");
  const [ message, setMessage ] = useState("Introduce el id de tu orden")
  const [data, setData] = useState({});

  const searchData = (e) => {
    setOrderId(e.target.value)
  }

  const getOrder = (e) => {
    e.preventDefault();
    const getData = async() => {
      if(orderId !== ""){
        const queryRef = doc(db, "orders", orderId); 
        await getDoc(queryRef)
          .then(res => {
            if(res.data() !== undefined){
              const dato = { ...res.data(), id: res.id }
              console.log("dato: ", dato)
              setData(dato)
              console.log(data)
              setLoading(false)
            } else {
              setData({})
              setLoading(true)
              setMessage("Introduce un id de orden válido")
            }
          })
          .catch(error => {
            console.log(error)
        })
      } else {
        setMessage("Debes introducir un id de orden")
        setOrderId("")
      }
    }
    getData();
  }

  return (
       
    <div className="container p-2 justify-content-center">
      <div className="container w-75 rounded p-2 mb-4" style={{"backgroundColor": "#f7fae8"}}>
        <form onSubmit={(e) => getOrder(e)}>
          <div className="row mx-2 justify-content-center">
            <input type="text" onChange={searchData} className="col-10 p-2" name="orderId" placeholder="Insert your order ID" />
            <button type="submit" className="btn col-1 rounded p-2"><BsSearch /></button>
          </div>
        </form>
      </div>

      <div className="container w-75 p-2 rounded" style={{"backgroundColor": "#f7fae8"}}>
          {
              loading ?
                  <h4 className="p-2 text-muted ">{message}</h4>
              :
                  <SaleDetail order={data} />                
          }
      </div>
    </div>
  )
}

export default SaleDetailContainer;