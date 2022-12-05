import { useEffect, useState } from 'react';
import './add.css'
const Add = () => {
   const [product, setProduct] = useState({name:'', price:'', img:''})
   
   const updateProduct = () => {
      const body = {...product}
      const optionsFetch = {
         method: 'POST',
         body: JSON.stringify(body),
         headers: {
            'Content-Type':'application/json'
         }
      }
       fetch(`http://localhost:8080/api/products`, optionsFetch)
         .then(res => res.json())
         .then(console.log)
         .finally(clearInps)
   }

   const clearInps =_=>setProduct({name:'', price:'', img:''})

   const changeProduct = (e) => {
      // console.log([e.target.name]);
      setProduct({...product, [e.target.name]:e.target.value})
   }

   useEffect(() => {
      // setDefaultValue('')
   }, [product])

   return (
      <>
         <div className="boxAdd">
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalAdd">
            Agregar producto
            </button>
         </div>

         <div className="modal fade" id="exampleModalAdd" tabIndex="-1" aria-labelledby="exampleModalAddLabel" aria-hidden="true">
            <div className="modal-dialog">
               <div className="modal-content">
                  <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalAddLabel">Crear producto</h1>
                  <button onClick={clearInps} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                     <div className="card py-1">
                     <div className="card-body">
                     <span>
                        Nombre
                     </span>
                     <input autoComplete='off' onChange={changeProduct} type="text" name='name' className='form-control' value={product.name} />
                     <span>
                        Precio
                     </span>
                     <input autoComplete='off' onChange={changeProduct} type="text" name='price' className='form-control' value={product.price} />
                     <span>
                        URL imagen
                     </span>
                     <input autoComplete='off' onChange={changeProduct} type="text" name='img' className='form-control ellipsis' value={product.img} />
                     </div>
                     </div>
                  </div>
                  <div className="modal-footer">
                  <button onClick={clearInps} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                     <button
                        type="button" className="btn btn-primary" data-bs-dismiss="modal"
                        onClick={updateProduct}
                     >Guardar</button>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
};

export default Add