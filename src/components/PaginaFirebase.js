import React, { useEffect, useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../utils/firebase';

const PaginaFirebase = () => {

    const [ productArray, setProductArray ] = useState([]);

    /* useEffect(() => {
        const getData = async() => {
            const query = collection(db, "items"); // consulta a la db
            const response = await getDocs(query);
            const docs = response.docs
            console.log(docs[0].data());

            const data = docs.map( doc => {
                return {...doc.data(), id: doc.id}
            });
            console.log(data);

            setProductArray(data);
        }
        getData()
    }, []); */


    // para traer la data filtrada
    useEffect(() => {
      const getData = async() => {
          const queryRef = query(collection(db, "items"), where("category", "==", "sillas")); // consulta a la db
          const response = await getDocs(queryRef);
          const docs = response.docs
          //console.log(docs[0].data());

          const data = docs.map( doc => {
              return {...doc.data(), id: doc.id}
          });
          console.log(data);

          setProductArray(data);
      }
      getData()
  }, []);



  return (
    <div>PaginaFirebase</div>
  )
}

export default PaginaFirebase;