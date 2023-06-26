import { USERS_FETCH_ALL, USERS_FETCH_ID, USERS_FETCH_LOADING, USERS_ERROR } from "../action/actionType"

const defaultState = {
    users: [],
    userDetail: null,
    loading: true,
    updateStatus: null,
    errorMessage: ''
}

function usersReducer(state = defaultState, action) {
    switch (action.type) {
        case USERS_FETCH_ALL:
            return {
                ...state,
                users: action.payload
            }
        case USERS_FETCH_ID:
            return {
                ...state,
                userDetail: action.payload
            }
        case USERS_FETCH_LOADING:
            return {
                ...state,
                loading: action.payload
            }
        case USERS_ERROR:
            return {
                ...state,
                errorMessage: action.payload
            }
        default:
            return state
    }
}

export default usersReducer