
export const actions = {
    increment: () => (dispatch, getState) => {
        dispatch({
            type: 'INCREMENT',
        })
    },

    decrement: () => (dispatch, getState) => {
        dispatch({
            type: 'DECREMENT',
        })
    }
};
