import { useEffect, useState } from 'react';
import './products.css'
export default Products = () => {
   const [productList, setProductList] = useState([])
    useEffect(() => {
        fetch('http://localhost:8080/api/products')
            .then(res => res.json())
            .then(setProductList)
    }, [])

    return (
        <div className="product_container position-relative">
            <div className="boxAdd">
                <button type="button" className="btn btn-primary me-2">Agregar producto</button>
            
            </div>
            <ul className="list-group">
                {
                    productList.map(({ name, price, img, _id }) =>
                        <ItemList
                            key={_id}
                            name={name}
                            price={price}
                            img={img}
                            _id={_id}
                        />
                    )
                }
            </ul>
        </div>
    )
};

const ItemList = ({ name, price, img, _id }) => {
    return (
        <li key={_id} className="list-group-item item_list">
            <span>
                <label className="me-2">{name}</label>
                <label>price</label>
                <img src={img} className="img_item" />
            </span>
            <span>
                <button type="button" className="btn btn-warning me-2">Editar</button>
                <button type="button" className="btn btn-danger ">Eliminar</button>
            </span>
        </li>
    )
}

// export default Products