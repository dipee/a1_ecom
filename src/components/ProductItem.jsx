import React, {useContext} from 'react';
import {ShopContext} from '../context/ShopContext';
function ProductItem({product}){
    const {addToCart} = useContext(ShopContext);
    const handleAddToCart = () => {
        addToCart(product);
    }
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={product.imageUrl} className="card-img-top" alt={product.name} />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.description}</p>
        <p className="card-text">${product.price}</p>
        <a href="#" onClick={handleAddToCart} className="btn btn-primary">Add to Cart</a>
      </div>
    </div>
  );
}

export default ProductItem;
