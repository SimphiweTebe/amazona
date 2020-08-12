import React, { useEffect } from 'react'
import { addToCart } from '../actions/cartActions';
import { useDispatch, useSelector } from 'react-redux'

function CartPage(props) {

    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;

    const productId = parseInt(props.match.params.id);
    const qty = props.location.search ? Number(props.location.search.split("=")[1]) : 1;
    const dispatch = useDispatch()

    useEffect(() => {

        if (productId) {
            dispatch(addToCart(productId, qty));
        }

    }, [])

    return (
        <div className="cart">
            <div className="cart__list">
                <ul className="cart__list__container">
                    <li>
                        <h3>Shopping Cart</h3>
                        <p>Price</p>
                    </li>
                    <li>
                        {
                            cartItems.length === 0 ? <p>Cart is empty</p>
                                :
                                cartItems.map((item, index) => (
                                    <div key={index}>
                                        <img src={item.image} alt="product" />
                                        <p>{item.name}</p>
                                        <div>
                                            Qty:
                                            <select>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                            </select>
                                        </div>
                                        <p>{item.price}</p>
                                    </div>
                                ))
                        }
                    </li>
                </ul>
            </div>
            <div className="cart__actions">
                <h3>
                    {/* Subtotal ( {cartItems.reduce((a, c) => a + c.qty), 0} items) */}
                    Subtotal ( {cartItems.reduce((a, c) => a + c.qty, 0)} items)
                    :
                    R {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
                </h3>
                <button disabled={cartItems.length === 0}>
                    Proceed to Checkout
                </button>
            </div>
        </div>
    )
}

export default CartPage
