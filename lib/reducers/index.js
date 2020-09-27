
export const stateReducers = (state, action) => {
    switch(action.type) {

        case 'ADD_PRODUCT':
            return {
                ...state.products.push(action.value),
            }
        case 'REMOVE_PRODUCT':
            return {
                ...state.products.filter(product =>
                    product === action.value
                )
            }

        case 'ADD_COMBO':
            return {
                ...state.products.push(action.value),

            }

        case 'REMOVE_COMBO':
            return {
                ...state.products.filter(product =>
                    product === action.value
                )
            }
        default:
            throw new Error('ACTION TYPE INVALID');
    };
}
