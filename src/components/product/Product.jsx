import React, { useContext } from 'react';
import { ProductContext } from '../../context/Context';

const Product = ({ product }) => {
    const { addToCart } = useContext(ProductContext)
    return (
        <div className="mx-auto flex md:w-80  w-full flex-col justify-center bg-black shadow-xl shadow-gray-400/20">
            <img className="aspect-video md:w-80 w-full object-cover object-center" src={product.image} />
            <div className="p-6 flex flex-col">
                <small className="text-gray-400 text-xs">{product.category}</small>
                <h1 className="text-2xl font-medium text-gray-200 pb-2">{product.name}</h1>
                <p className="text-lg text-gray-400 font-bold">Price: {product.price} $</p>
                <p className="text-gray-600 ">{product.title}</p>
                <button onClick={() => addToCart(product)} type="button" className="py-2 me-2 my-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Add To Cart</button>
            </div>
        </div>
    );
};

export default Product;
