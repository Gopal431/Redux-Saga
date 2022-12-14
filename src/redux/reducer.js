import { ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART } from './constant'
export const cartData = (data = [], action) => {
    switch (action.type) {
        case ADD_TO_CART:
            console.log("reducer called", action)
            return [action.data, ...data]
        case REMOVE_FROM_CART:
            console.log("REMOVE_FROM_CART", action);
            // data.length = data.length ? data.length - 1 : []
            const remainingIteam = data.filter((iteam) => iteam.id !== action.data)
            return [...remainingIteam]
        case EMPTY_CART:
            console.log("EMPTY_CART", action);
            data = []
            return [...data]

        default:
            return data
    }
}