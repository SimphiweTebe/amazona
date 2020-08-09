import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Loader from '../components/Loader';

function HomePage(props) {

    const [products, setProducts] = useState([]);
    const [busy, setIsBusy] = useState(true);

    useEffect(() => {

        const fetchData = async () => {
            const { data } = await axios.get("/api/products");
            setProducts(data);
            setIsBusy(false)
        }

        fetchData();

        //CLEANUP
        return () => {
            //
        }
    }, [])

    console.log(products)

    return (
        <>
            {
                busy && <Loader />
            }
            <ul className="products">
                {
                    products.length > 0 && !busy && products.map(product => (
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
        </>
    )
}

export default HomePage
