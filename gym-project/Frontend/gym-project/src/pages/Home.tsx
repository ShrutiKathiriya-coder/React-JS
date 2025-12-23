import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] text-center space-y-8">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
            >
                Welcome to GymPro
            </motion.h1>
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-gray-400 max-w-2xl"
            >
                Transform your body, elevate your mind. Join the elite community of fitness enthusiasts today.
            </motion.p>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex gap-4"
            >
                <NavLink to="/add-member" className="px-8 py-3 bg-blue-600 rounded-full font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/25">
                    Join Now
                </NavLink>
                <NavLink to="/services" className="px-8 py-3 bg-white/10 rounded-full font-semibold hover:bg-white/20 transition-colors backdrop-blur-sm">
                    Explore Services
                </NavLink>
            </motion.div>
        </div>
    );
};

export default Home;
