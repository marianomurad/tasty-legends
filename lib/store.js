import React, { useReducer } from 'react';
import { stateReducers } from "./reducers";
import { StateContext } from "./contexts";

const initialState = { products: []}; //init state
const StoreContext = StateContext; // create context
const { Provider } = StoreContext;

const StateProvider = ( { children } ) => {
    const [state, dispatch] = useReducer(stateReducers, initialState);

    return (
        <Provider value={{ state, dispatch }}>
                {children}
        </Provider>
    );
};

export { StoreContext, StateProvider }
