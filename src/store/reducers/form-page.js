const initialState = {
    items: [],
    totalPrice: null
};


export default (state = initialState, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            const newItem = action.payload;
            const newPrice = Number(newItem.price)
            return {
                ...state,
                items: [
                    ...state.items,
                    newItem
                ],
                totalPrice: state.totalPrice + newPrice
            };
        case 'REMOVED_FROM_ITEM':
            const removeItem = action.payload.removedId;
            const removePrice = action.payload.price
            const index = state.items.findIndex(({id}) => id === removeItem)
            return {
                ...state,
                items: [
                    ...state.items.slice(0, index),
                    ...state.items.slice(index + 1)
                ],
                totalPrice: state.totalPrice - removePrice
            }
        case 'GET_INFO_LOCAL_STORAGE':
            const newStorage = action.payload;
            return {
                ...state,
                items:newStorage
            }
        default:
            return state;
    }
};





