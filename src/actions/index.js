import jsonPlaceholder from '../apis/jsonPlaceholder';

// To make an API request inside an action creator, you need middleware
// With middleware, you can return function from an action creator and manually dispatch actions
export const fetchPosts = () => {
    return async dispatch => {
        const response = await jsonPlaceholder.get('/posts');

        // manually dispatch action
        dispatch({ 
            type: 'FETCH_POST',
            payload: response
        })
    };
};