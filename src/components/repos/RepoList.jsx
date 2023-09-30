import PropTypes from 'prop-types';

import RepoItem from './RepoItem.jsx';

function RepoList({repos}){

    return (
        <div className="rounded-lg shadow-lg card bg-base-100">
            <div className="card-body">
                <h1 className="text-3xl my-4 font-bold card-title">Latest Repositories</h1>
                {repos.map((item) => {
                    return (<RepoItem key={item.id} repo={item}/>);
                })}
            </div>
        </div>
    );
}

RepoList.propTypes = {
    repos: PropTypes.array.isRequired,
};

export default RepoList;