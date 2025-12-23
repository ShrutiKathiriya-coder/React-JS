const Footer = () => {
    return (
        <footer className="bg-slate-900 border-t border-white/10 py-6 mt-auto">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <p className="text-gray-400">
                    © {new Date().getFullYear()} GymPro. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
