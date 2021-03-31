import React from 'react';
import Product from '../componenents/Product';
import data from '../data';

export default function HomeScreen(props) {
    return (
        <div>
        <div className="row center">
          {
            data.products.map(product => (
           <Product key={product._id}  product={product}></Product>
            
            ))}
       </div>
       </div>
    )
}

// export default HomeScreen;