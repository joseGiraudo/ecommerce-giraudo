import React from 'react';
import Item from './Item';

const ItemList = ({ loading, data }) => {

  return (
    
    <>

      {
        loading ? <h3>cargando...</h3>
        :
        // hay que mapear la lista de items a mostrar
        // y mostrar un componente Item por cada uno
        <div className="d-flex align-items-center justify-content-center" >
          <div className="w-75 card-group row row-cols-1 row-cols-md-3 row-cols-lg-3">
            {data.map(data => (
              <Item
                key= {data.id}
                data = {data}
              />
            ))}
          </div>
        </div>
      }
    </>
  )
}

export default ItemList;