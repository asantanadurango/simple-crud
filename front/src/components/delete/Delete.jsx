import { useEffect, useState } from 'react';
// import './add.css'
const Delete = ({_id}) => {   
   const deleteProduct = () => {
      const optionsFetch = {
         method: 'DELETE',
      }
       fetch(`http://localhost:8080/api/products/${_id}`, optionsFetch)
         .then(res => res.json())
         .then(console.log)
   }

   return (
            <button
               type="button" className="btn btn-danger mx-1" data-bs-dismiss="modal"
               onClick={deleteProduct}
            >Eliminar</button>
   )
};

export default Delete