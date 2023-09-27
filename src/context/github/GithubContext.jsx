import {createContext, useReducer} from 'react';

import GithubReducer from './GitubReducer.js';

const GithubContext = createContext();
const GH_URL = import.meta.env.VITE_GITHUB_URL;
const GH_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

export const GithubProvider = ({children}) => {
    const initialState = {
        users: [],
        isLoading: false,
    };

    const [state, dispatch] = useReducer(GithubReducer, initialState);

    // sets the "isLoading" state to true
    const startLoading = () => dispatch({type: 'SET_LOADING'});

    const fetchUsers = async () => {
        startLoading();
        const response = await fetch(`${GH_URL}/users`, {
            headers: {
                Authorization: `token ${GH_TOKEN}`,
            },
        });

        const data = await response.json();
        dispatch({
            type: 'GET_USERS',
            payload: data,
        });
    };

    return (<GithubContext.Provider value={{
        users: state.users,
        isLoading: state.isLoading,
        fetchUsers,
    }}>{children}</GithubContext.Provider>);
};

export default GithubContext;

