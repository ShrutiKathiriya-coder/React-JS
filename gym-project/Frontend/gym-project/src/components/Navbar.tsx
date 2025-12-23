import { NavLink } from 'react-router-dom';
import { FaDumbbell } from 'react-icons/fa';
import { cn } from '../utils/utils';

const DisplayNavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
    <NavLink
        to={to}
        className={({ isActive }) =>
            cn(
                'px-4 py-2 rounded-lg transition-all duration-300 font-medium text-sm md:text-base',
                isActive
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
            )
        }
    >
        {children}
    </NavLink>
);

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center gap-2">
                        <div className="bg-gradient-to-tr from-blue-500 to-purple-600 p-2 rounded-lg">
                            <FaDumbbell className="text-white text-xl" />
                        </div>
                        <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                            GymPro
                        </span>
                    </div>

                    <div className="hidden md:flex items-center gap-4">
                        <DisplayNavLink to="/">Home</DisplayNavLink>
                        <DisplayNavLink to="/services">Services</DisplayNavLink>
                        <DisplayNavLink to="/add-member">Add Member</DisplayNavLink>
                        <DisplayNavLink to="/view-members">View Members</DisplayNavLink>
                    </div>

                    <div className="md:hidden">
                        {/* Mobile menu button could go here - simplified for now */}
                    </div>

                    <div className="hidden md:block">
                        <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white font-medium hover:opacity-90 transition-opacity shadow-lg shadow-blue-500/20">
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
