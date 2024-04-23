export const initialState = {
    usage: 0,
    days: 0,
};

export const actionTypes = {
    SET_USAGE: "SET_USAGE",
    SET_DAY_COUNT: "SET_DAY_COUNT"
};

export const usageReducer = (state, action) => {
    switch (action.type) {
        case actionTypes.SET_USAGE:
            const roundedUsage = parseFloat(action.payload).toFixed(2);
            const usageNumber = parseFloat(roundedUsage);
            return {...state, usage: usageNumber};
        case actionTypes.SET_DAY_COUNT:
            const countedDays = action.payload;
            return {...state, days: countedDays};
        default:
            return state;
    }
};