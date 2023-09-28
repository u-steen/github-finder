import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import NotFound from './pages/NotFound.jsx';

import Navbar from './components/layout/Navbar.jsx';
import Footer from './components/layout/Footer.jsx';

import {GithubProvider} from './context/github/GithubContext.jsx';
import {AlertProvider} from './context/alert/AlertContext.jsx';

function App(){

    return (
        <GithubProvider>
            <AlertProvider>
                <Router>
                    <div className="flex flex-col h-screen justify-between">
                        <Navbar/>
                        <main className="container mx-auto px-3 pb-12">
                            <Routes>
                                <Route path="/" element={<Home/>}/>
                                <Route path="/about" element={<About/>}/>
                                <Route path="/*" element={<NotFound/>}/>
                            </Routes>
                        </main>
                        <Footer/>
                    </div>
                </Router>
            </AlertProvider>
        </GithubProvider>
    );
}

export default App;