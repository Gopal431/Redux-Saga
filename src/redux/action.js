export const addToCart = (data) => {
    console.log("action is called", data)
    return {
        type: 'ADD_TO_CART',
        data
    }
}
export const removeToCart = (data) => {
    console.log("action removeToCart", data)
    return {
        type: 'REMOVE_FROM_CART ',
        data
    }
}
export const emptyCart = () => {
    console.log("action Empty")
    return {
        type: 'EMPTY_CART ',

    }
}
export const filterData = (data) => {
    // console.log("filter Data", data)
    return {
        type: 'FILTER_DATA',
        data
    }
}