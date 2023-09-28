import {createContext, useReducer} from 'react';

import GithubReducer from './GitubReducer.js';

const GithubContext = createContext();
const GH_URL = import.meta.env.VITE_GITHUB_URL;
const GH_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

export const GithubProvider = ({children}) => {
    const initialState = {
        users: [],
        isLoading: false,
        user: {},
    };

    const [state, dispatch] = useReducer(GithubReducer, initialState);

    // sets the "isLoading" state to true
    const startLoading = () => dispatch({type: 'SET_LOADING'});

    const searchUsers = async (text) => {
        startLoading();
        const params = new URLSearchParams({
            q: text,
        });

        const response = await fetch(`${GH_URL}/search/users?${params}`, {
            headers: {
                Authorization: `token ${GH_TOKEN}`,
            },
        });

        const {items} = await response.json();
        dispatch({
            type: 'GET_USERS',
            payload: items,
        });
    };

    const searchUser = async (login) => {
        startLoading();

        const response = await fetch(`${GH_URL}/users/${login}`, {
            headers: {
                Authorization: `token ${GH_TOKEN}`,
            },
        });

        if(response.status === 404) {
            window.location = '/notfound';
        } else {
            const data = await response.json();
            dispatch({
                type: 'GET_USER',
                payload: data,
            });
        }
    };
    const clearUsers = () => {
        dispatch({
            type: 'CLEAR',
        });
    };

    return (<GithubContext.Provider value={{
        users: state.users,
        isLoading: state.isLoading,
        user: state.user,
        searchUsers,
        clearUsers,
        searchUser,
    }}>{children}</GithubContext.Provider>);
};

export default GithubContext;

