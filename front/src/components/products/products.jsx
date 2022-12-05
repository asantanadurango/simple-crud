import { useEffect, useState } from 'react';
import Edit from '../edit/Edit.jsx';
import Add from '../add/Add.jsx'
import './products.css'
import Delete from '../delete/Delete.jsx';
const Products = () => {
   const [productList, setProductList] = useState([])
    useEffect(() => {
        fetch('http://localhost:8080/api/products')
            .then(res => res.json())
            .then(setProductList)
    }, [productList])

    return (
        <div className="product_container position-relative">
                <Add />
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
                <label>${price}</label>
                <img src={img} className="img_item" />
            </span>
            <span>
                <Edit
                    name={name}
                    price={price}
                    img={img}
                    _id={_id}
                />
                <Delete _id={_id} />    
            </span>
        </li>
    )
}

export default Products