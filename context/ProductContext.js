import React, { createContext, useState } from 'react';

export const ProductContext = createContext();

const initialProducts = [
  { id: 1, name: 'Classic T-Shirt', brand: 'Zyra Basics', price: 19.99, image: 'https://burst.shopifycdn.com/photos/light-green-t-shirt.jpg?width=1000&format=pjpg&exif=0&iptc=0' },
  { id: 2, name: 'Slim Fit Jeans', brand: 'Denim Co', price: 49.99, image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT-XkT5L09o8QAY4YQkSuVaOPqXV8Xq-O2CEh2qK_NvsaREMQhRuxdReuELmaUMrNLOjCv4mURXgIOkia8xry4p0-zAV1WWKa42UVT3ZtRCcILhulTiDfKS8w' },
  { id: 3, name: 'Summer Dress', brand: 'Floral Fashions', price: 39.99, image: 'https://littleboxindia.com/cdn/shop/files/2d8d7fb386c9bf19841423200a893c1c_900x.jpg?v=1719404505' },
  { id: 4, name: 'Leather Jacket', brand: 'Urban Outfitters', price: 89.99, image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQTmfM2jM6ScGDvb4_c2V_i_AjWdQr4thPMR8D4-l417X50kBBWlcxpXk2fgluQvJNLrbQy9CQ7DZ4pb5oYVOPngN0u2rC86yTA-E-inRVpc3gpc-Inbsmu-Q' },
  { id: 5, name: 'Running Shoes', brand: 'SportyFeet', price: 79.99, image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/44875d2b18984d7a86c5b55bd629bc0c_9366/JAUNTZA_SHOES_White_IU7900_01_standard.jpg' },
  { id: 6, name: 'Silk Scarf', brand: 'Luxe Accessories', price: 29.99, image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTq6AHIAYcnVSMA12O1xV7U4IdFF4AhQHVn22zyiGzgK03e8VU4T-a5xNwApMMRaTJ6BR9NBMChqFLZSVBOxm8IaPhU_3j143KDKoVCJJa3mHf0O6IgGCtY' },
];

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(initialProducts);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};
