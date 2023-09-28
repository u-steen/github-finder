import {useContext, useEffect} from 'react';
import GithubContext from '../context/github/GithubContext.jsx';
import {useParams} from 'react-router-dom';

function User(){
    const {user, searchUser} = useContext(GithubContext);
    const params = useParams();
    useEffect(() => {
        searchUser(params.login);
    }, []);

    return (
        <div>User</div>
    );
}

export default User;