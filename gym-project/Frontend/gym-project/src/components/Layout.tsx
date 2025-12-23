import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { Toaster } from 'react-hot-toast';

const Layout = () => {
    return (
        <div className="min-h-screen flex flex-col bg-slate-950 text-white font-sans selection:bg-blue-500/30">
            <Navbar />
            <main className="flex-grow pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
                <Outlet />
            </main>
            <Footer />
            <Toaster
                position="top-center"
                toastOptions={{
                    style: {
                        background: '#1e293b',
                        color: '#fff',
                        border: '1px solid #334155',
                    },
                }}
            />
        </div>
    );
};

export default Layout;
