import React, { useState } from 'react';

import {QRCodeSVG} from 'qrcode.react';
import qs from 'qs'
const Product = () => {

  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productPrice, setProductPrice] = useState('');

  const productInfo = {
    
    name: productName,
    description: productDescription,
    price: productPrice,
  };

  
  return (
    <div>
      <h1>Product Registration</h1>
      <label>
        Product Name:
        <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} />
      </label>

      <label>
        Product Description:
        <textarea value={productDescription} onChange={(e) => setProductDescription(e.target.value)} />
      </label>
      <label>
        Product Price:
        <input type="text" value={productPrice} onChange={(e) => setProductPrice(e.target.value)} />
      </label>
      <QRCodeSVG value={`https://main--sprightly-nougat-46b9c7.netlify.app/?${qs.stringify(productInfo)}`} />
      <div>
     
      </div>
    </div>
  );
};

export default Product;
