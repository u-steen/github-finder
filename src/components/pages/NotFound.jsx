import {Link} from 'react-router-dom'
import {FaHome} from 'react-icons/fa'

export default function NotFound(){
    return (
        <div className="hero">
            <div className="text-center hero-content">
                <div className="max-w-lg">
                    <h1 className="text-8xl font-bold mb-8">
                        Oops
                    </h1>
                    <p className="text-5xl mb-8">Error 404 - Page not Found</p>
                    <Link to='/' className="btn btn-primary btn-lg">
                        <FaHome className='mr-2'/>
                        <h1>Back to Home</h1>
                    </Link>
                </div>
            </div>
        </div>
    )

}
