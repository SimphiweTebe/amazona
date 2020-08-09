import React from 'react';
//import { Link } from 'react-router-dom';
import data from '../data';

function ProductPage(props) {

    //parse ID since its a string not interger -- otherwise will return undefined
    let id = parseInt(props.match.params.id);
    const product = data.products.find(x => x._id === id);

    return (
        <>
            {/* <div className="back__link">
                <Link to="/">Back</Link>
            </div> */}
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
                        <li>
                            {product.rating} Stars ({product.numReviews} Reviews)
                        </li>
                        <li>
                            Price: R{product.price}
                        </li>
                        <li>
                            {product.description ? <p>{product.description}</p> : null}
                        </li>
                    </ul>

                </div>

                {/* <div className="details__info">
                    <ul>
                        <li>
                            <h4>{product.name}</h4>
                        </li>
                        <li>
                            {product.rating} Stars ({product.numReviews} Reviews)
                        </li>
                        <li>
                            <strong>R{product.price}</strong>
                        </li>
                        <li >
                            {product.description ? <p>{product.description}</p> : <p>Currently no description!</p>}
                        </li>
                    </ul>
                </div> */}

                <div className="details__action">
                    <ul>
                        <li><strong>Price: R{product.price}</strong></li>
                        <li>Status: {product.status}</li>
                        <li>Qty:
                            <select name="" id="">
                                <option value="">1</option>
                                <option value="">2</option>
                                <option value="">3</option>
                                <option value="">4</option>
                            </select>
                        </li>
                        <li><button>Add to Cart</button></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default ProductPage
