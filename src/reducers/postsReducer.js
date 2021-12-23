export default (state = [], action) => {
    // create brand-new array/object, so that redux knows that state should be updated
    switch (action.type) {
        case 'FETCH_POST':
            return action.payload;
        default: 
            return state;
    }
};