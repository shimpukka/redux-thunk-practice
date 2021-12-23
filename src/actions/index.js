import jsonPlaceholder from '../apis/jsonPlaceholder';

// To make an API request inside an action creator, you need middleware
// With middleware, you can return function from an action creator and manually dispatch actions
export const fetchPosts = () => {
    return async dispatch => {
        const response = await jsonPlaceholder.get('/posts');

        // manually dispatch action
        dispatch({ 
            type: 'FETCH_POST',
            payload: response.data
        })
    };
};

// same as the one above, refactored a bit
export const fetchUser = (id) => async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${id}`);
        
    dispatch({ type: 'FETCH_USER', payload: response.data });
};