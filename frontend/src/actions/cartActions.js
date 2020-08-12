import Axios from 'axios';
import { CART_ADD_ITEM } from '../constants/cartConstants';

const addToCart = (productId, qty) => async (dispatch) => {

    try {

        const { data } = await Axios.get("/api/product/" + productId);
        dispatch({
            type: CART_ADD_ITEM, payload: {
                product: data._id,
                name: data.name,
                image: data.imageUrl,
                price: data.price,
                countInStock: data.countInStock,
                qty
            }
        })

    } catch (error) {

    }
}

export { addToCart }