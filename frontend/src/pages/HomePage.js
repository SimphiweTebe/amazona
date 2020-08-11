import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import Loader from '../components/Loader';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../actions/productActions'

function HomePage(props) {

    const productList = useSelector(state => state.productList);
    const { products, loading, error } = productList;
    const dispatch = useDispatch()

    useEffect(() => {

        dispatch(fetchProducts());

    }, [])

    return (
        <>
            {
                loading ? <Loader /> :
                    error ? <div>{error}</div> :

                        <ul className="products">
                            {
                                products && products.map(product => (
                                    <li key={product._id}>
                                        <div className="product">
                                            <Link to={`/product/${product._id}`}>
                                                <img src={product.imageUrl} alt="" className="product__image" />
                                            </Link>
                                            <Link to={`/product/${product._id}`} className="product__name">
                                                {product.name}
                                            </Link>
                                            <div className="product__brand">{product.brand}</div>
                                            <div className="product__price">{product.price}</div>
                                            <div className="product__rating">{product.rating} ({product.numReviews} Reviews)</div>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
            }
        </>
    )
}

export default HomePage
