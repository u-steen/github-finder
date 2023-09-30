const GH_URL = import.meta.env.VITE_GITHUB_URL;
const GH_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

export const searchUsers = async (text) => {
    const params = new URLSearchParams({
        q: text,
    });

    const response = await fetch(`${GH_URL}/search/users?${params}`, {
        headers: {
            Authorization: `token ${GH_TOKEN}`,
        },
    });
    const {items} = await response.json();
    return items;
};

export const searchUser = async (login) => {
    const response = await fetch(`${GH_URL}/users/${login}`, {
        headers: {
            Authorization: `token ${GH_TOKEN}`,
        },
    });

    if(response.status === 404) {
        window.location = '/notfound';
    } else {
        const data = await response.json();
        console.log(data);
        return data;
    }
};

export const getUserRepos = async (login) => {
    const params = new URLSearchParams({
        sort: 'created',
        per_page: 10,
    });

    const response = await fetch(`${GH_URL}/users/${login}/repos?${params}`, {
        headers: {
            Authorization: `token ${GH_TOKEN}`,
        },
    });
    return await response.json();
};
