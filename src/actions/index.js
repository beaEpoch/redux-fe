export const actions = {
    // increment: () => (dispatch, getState) => {
    //     const st = getState();
    //     console.log(st);
    //     dispatch({
    //         type: 'INCREMENT',
    //     })
    // },
    //
    // decrement: () => (dispatch, getState) => {
    //     dispatch({
    //         type: 'DECREMENT',
    //     })
    // }

    increment: () => ({
        type: 'INCREMENT',
    }),

    decrement: () => {
        return {
            type: 'DECREMENT',
        };
    }
};
