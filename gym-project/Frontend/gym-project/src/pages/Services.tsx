const Services = () => {
    return (
        <div className="py-12">
            <h1 className="text-4xl font-bold mb-8">Our Services</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-slate-900 border border-white/5 p-6 rounded-xl hover:border-blue-500/50 transition-colors group">
                        <div className="h-40 bg-slate-800 rounded-lg mb-4 group-hover:bg-slate-700 transition-colors"></div>
                        <h3 className="text-xl font-semibold mb-2">Service {i}</h3>
                        <p className="text-gray-400">Detailed description of service goes here. Premium quality training.</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
