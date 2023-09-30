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
