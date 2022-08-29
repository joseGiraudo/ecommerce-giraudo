import React, { useState, useEffect } from 'react';
import Item from './Item';
import getData from '../helper/helper';

const ItemList = ({itemList}) => {

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    getData.then(data => {
      setData(data)
      setLoading(false)
    })
  }, [])

  // cuando traigo la data de los items, el loading pasa a false y se muestran los items
    
  return (
    
    <>

      {
        loading ? <h3>Cargando...</h3>
        :
        // hay que mapear la lista de items a mostrar
        // y mostrar un componente Item por cada uno
        
        <div className="card-group">
          {data.map(data => {
            console.log(data);
            <Item
              key= {data.id}
              data = {data}
            />
          })}
        </div>
      }
    </>
  )
}

export default ItemList;