import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchSingleProduct } from '../actions/productActions';
import Loader from '../components/Loader';

function ProductPage(props) {

    const [qty, setQty] = useState(1);
    const productDetails = useSelector(state => state.productDetails);
    const { product, loading, error } = productDetails;
    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(fetchSingleProduct(props.match.params.id))

    }, [])

    const handleAddToCart = () => {
        props.history.push("/cart/" + props.match.params.id + "?qty=" + qty)
    }

    return (
        <>

            {
                loading ? <Loader /> :
                    error ? <h1>{error}</h1> :

                        <div className="details">

                            <div className="details__image">
                                <img src={product.imageUrl} alt="" />

                                <ul>
                                    <li>
                                        <h2>{product.brand}</h2>
                                    </li>
                                    <li>
                                        <h4>{product.name}</h4>
                                    </li>
                                </ul>

                            </div>

                            <div className="details__action">
                                <ul>
                                    <li><strong>Price: R{product.price}</strong></li>
                                    <li>{product.countInStock > 0 ? <p>Status: In Stock</p> : <p className="no-stock">Status: Out of Stock</p>}</li>

                                    {
                                        product.countInStock > 0 &&

                                        <li>Qty:

                                            <select value={qty} onChange={(e) => setQty(e.target.value)}>
                                                {
                                                    [...Array(product.countInStock).keys()].map(x =>
                                                        <option key={x + 1} value={x + 1}>{x + 1}</option>
                                                    )
                                                }
                                            </select>

                                        </li>
                                    }

                                    <li>
                                        {
                                            product.countInStock > 0 && <button onClick={handleAddToCart}>Add to Cart</button>
                                        }
                                    </li>
                                </ul>
                                <ul className="action__footer">
                                    <li>
                                        {product.rating} Stars ({product.numReviews} Reviews)
                                    </li>
                                    <li>
                                        {product.description && <p>{product.description}</p>}
                                    </li>
                                </ul>
                            </div>
                        </div>

            }
        </>
    )
}

export default ProductPage
