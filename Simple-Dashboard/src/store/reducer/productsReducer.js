import { PRODUCTS_FETCH_ALL, PRODUCTS_FETCH_ID, PRODUCTS_FETCH_LOADING, PRODUCTS_ERROR } from "../action/actionType"

const defaultState = {
    products: [],
    productDetail: null,
    loading: true,
    updateStatus: null,
    errorMessage: ''
}

function productsReducer(state = defaultState, action) {
    switch (action.type) {
        case PRODUCTS_FETCH_ALL:
            return {
                ...state,
                products: action.payload
            }
        case PRODUCTS_FETCH_ID:
            return {
                ...state,
                productDetail: action.payload
            }
        case PRODUCTS_FETCH_LOADING:
            return {
                ...state,
                loading: action.payload
            }
        case PRODUCTS_ERROR:
            return {
                ...state,
                errorMessage: action.payload
            }
        default:
            return state
    }
}

export default productsReducer