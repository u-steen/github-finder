import {useContext, useState} from 'react';
import GithubContext from '../../context/github/GithubContext.jsx';

function UserSearch(){
    const [text, setText] = useState('');
    const {users, searchUsers} = useContext(GithubContext);
    const handleChange = (e) => setText(e.target.value);
    const handleSubmit = (e) => {
        e.preventDefault();
        if(text === '') {
            alert('Please insert something');
        } else {
            searchUsers(text);
            setText('');
        }
    };
    return (
        <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2">
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <div className="relative">
                            <input type="text"
                                   className="w-full bg-gray-200 input input-lg text-black"
                                   value={text}
                                   onChange={handleChange}/>
                            <button type="submit"
                                    className="absolute right-0 top-0 rounded-l-none w-36 btn btn-lg">Search
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            {users.length > 0 &&
                (<div>
                    <button className="btn btn-ghost btn-lg">Clear</button>
                </div>)
            }

        </div>
    );
}

export default UserSearch;