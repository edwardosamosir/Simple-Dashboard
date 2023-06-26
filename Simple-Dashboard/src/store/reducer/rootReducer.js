import { combineReducers } from "redux"
import productsReducer from "./productsReducer"
import usersReducer from "./usersReducer"
import customReducer from "./customReducer"

const rootReducer = combineReducers({
    user: usersReducer,
    custom : customReducer,
    product: productsReducer
})

export default rootReducer