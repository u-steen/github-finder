import {useContext} from 'react';
import Spinner from '../layout/Spinner.jsx';
import UserItem from './UserItem.jsx';
import GithubContext from '../../context/github/GithubContext.jsx';

function UserResults(){
    const {isLoading, users} = useContext(GithubContext);

    if(!isLoading) {

        return (
            <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
                {users.map((user) => (
                    <UserItem key={user.id} user={user}/>
                ))}

            </div>
        );
    } else {
        return (
            <Spinner/>
        );
    }

}

export default UserResults;