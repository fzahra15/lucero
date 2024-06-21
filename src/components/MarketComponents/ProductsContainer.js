import React, { useEffect, useState } from 'react';
import ProductsCard from './ProductsCard';
import ProductView from './ProductView';
import { getProducts } from '../../actions/MainActions';
import { useDispatch, useSelector } from 'react-redux';

function ProductsContainer({products, totalSum, addToCart, prodVisible, setProdVisible, updateLocalStorage, filteredProducts }) {
    
    return (
        <>
            <div className="products_container_277">
                {products.map((data, i) => (
                    <ProductsCard
                        totalSum={totalSum}
                        updateLocalStorage={updateLocalStorage}
                        addToCart={addToCart}
                        key={i}
                        data={data}
                        setProdVisible={setProdVisible}
                        prodVisible={prodVisible}
                    />
                ))}
                {prodVisible ? <ProductView products={products} setProdVisible={setProdVisible} prodVisible={prodVisible} /> : null}
            </div>
            
        </>
    );
}

export default ProductsContainer;
