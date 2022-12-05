import { useState } from 'react';
import './edit.css'
const Edit = ({ _id, name, price, img }) => {

   const [product, setProduct] = useState({_id, name, price, img})
   
   const updateProduct = () => {
      console.log(_id);
      const body = {...product}
      const optionsFetch = {
         method: 'PUT',
         body: JSON.stringify(body),
         headers: {
            'Content-Type':'application/json'
         }
      }
       fetch(`http://localhost:8080/api/products/${_id}`, optionsFetch)
         .then(res => res.json())
         .then(console.log)
   }

   const changeProduct = (e) => {
      console.log([e.target.name]);
      setProduct({...product, [e.target.name]:e.target.value})
   }

   return (
      <>
         <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#editModal">
         Editar
         </button>

         <div className="modal fade" id="editModal" tabIndex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
            <div className="modal-dialog">
               <div className="modal-content">
                  <div className="modal-header">
                  <h1 className="modal-title fs-5" id="editModalLabel">Editar producto</h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                     <div className="card py-1">
                     <img src={img} className="card-img-top obj-fit-contain asp-ratio-2-1" alt="..."/>
                     <div className="card-body">
                     <span>
                        Nombre
                     </span>
                     <input autoComplete='off' onChange={changeProduct} type="text" name='name' defaultValue={name} className='form-control' />
                     <span>
                        Precio
                     </span>
                     <input autoComplete='off' onChange={changeProduct} type="text" name='price' defaultValue={price} className='form-control' />
                     <span>
                     URL imagen
                     </span>
                     <input autoComplete='off' onChange={changeProduct} type="text" name='img' defaultValue={img} className='form-control ellipsis' />
                     </div>
                     </div>
                  </div>
                  <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                     <button
                        type="button" className="btn btn-primary" data-bs-dismiss="modal"
                        onClick={updateProduct}
                     >Actualizar</button>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
};

export default Edit