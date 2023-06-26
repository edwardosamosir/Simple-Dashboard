import { PRODUCTS_FETCH_ALL, PRODUCTS_FETCH_ID, PRODUCTS_UPDATE, PRODUCTS_FETCH_LOADING, PRODUCTS_ADD_LOADING, PRODUCTS_ADD_RESPONSE, PRODUCTS_ERROR } from "../action/actionType"

const defaultState = {
    products: [],
    productDetail: null,
    loading: true,
    updateStatus: null,
    productResponse: null,
    errorMessage: ''
}

function productsReducer(state = defaultState, action) {
    switch (action.type) {
        case PRODUCTS_FETCH_ALL:
            return {
                ...state,
                PRODUCTS: action.payload
            }
        case PRODUCTS_FETCH_ID:
            return {
                ...state,
                postDetail: action.payload
            }
        case PRODUCTS_FETCH_LOADING:
            return {
                ...state,
                loading: action.payload
            }
        case PRODUCTS_UPDATE:
            return {
                ...state,
                updateStatus: action.payload
            }
        case PRODUCTS_ADD_RESPONSE:
            return {
                ...state,
                postResponse: action.payload
            }
        case PRODUCTS_ADD_LOADING:
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