import { PRODUCT_LIST, SEARCH_PRODUCT, GET_LIST_PRODUCT_ID } from "./constant"

export const productList = () => {  
    return {
        type: PRODUCT_LIST,
    }
}

export const productSearch = (query) => {  
    return {
        type: SEARCH_PRODUCT,
        query
    }
}

export const productGetId = (getId) => {  
    return {
        type: GET_LIST_PRODUCT_ID,
        getId
    }
}