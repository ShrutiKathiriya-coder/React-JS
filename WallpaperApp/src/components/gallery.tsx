import React, { useState, useEffect } from 'react';
import { imageAPI } from '../API/imageAPI';

interface Picture {
    id: number;
    webformatURL: string;
    largeImageURL: string;
    tags: string;
    user: string;
    views: number;
    downloads: number;
    likes: number;
}

export default function GalleryView() {
    const [photosCollection, setphotosCollection] = useState<Picture[]>([]);
    const [Filter, setFilter] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [Chosephoto, setChosephoto] = useState<Picture | null>(null);

    const themeOptions = [
        { label: 'Gaming', term: 'gaming' },
        { label: 'Space', term: 'space' },
        { label: 'Urban', term: 'city' },
        { label: 'Wildlife', term: 'wildlife' },
        { label: 'Minimalist', term: 'minimal' },
        { label: 'Sports', term: 'sports' },
        { label: 'Technology', term: 'technology' },
        { label: 'Cars', term: 'cars' },
        { label: 'Ocean', term: 'ocean' },
        { label: 'Mountains', term: 'mountains' }
    ];

    useEffect(() => {
        loadPictures('background');
    }, []);

    const loadPictures = async (searchTerm: string) => {
        setIsLoading(true);
        const pictureData = await imageAPI.loadPictures(searchTerm);
        setphotosCollection(pictureData || []);
        setIsLoading(false);
    };

    const submitSearch = (event: React.FormEvent) => {
        event.preventDefault();
        if (Filter.trim()) {
            loadPictures(Filter);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
            <header className="bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 border-b-4 border-purple-800 sticky top-0 z-50 shadow-xl">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between py-5">
                        <div className="flex items-center">
                            <div className="flex items-center space-x-2">
                                <svg className="w-8 h-8 text-yellow-300" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
                                </svg>
                                <span className="text-3xl font-black text-white tracking-tight">ImageVault</span>
                            </div>
                        </div>
                        <div className="flex-1 max-w-2xl mx-8">
                            <form onSubmit={submitSearch} className="relative">
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Search premium images, backgrounds, themes..."
                                        value={Filter}
                                        onChange={(e) => setFilter(e.target.value)}
                                        className="w-full px-6 py-3.5 bg-white/95 border-0 rounded-2xl focus:ring-4 focus:ring-purple-300 focus:bg-white focus:shadow-2xl transition-all duration-300 outline-none text-gray-700 font-medium"
                                    />
                                    <button
                                        type="submit"
                                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-5 py-2 rounded-xl hover:from-purple-600 hover:to-indigo-700 transition-all duration-300 shadow-lg font-semibold"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="flex items-center space-x-6">
                            <nav className="flex items-center">
                                <div className="relative group">
                                    <button className="flex items-center space-x-2 text-white hover:text-yellow-300 font-bold py-2.5 px-5 rounded-xl hover:bg-white/20 transition-all duration-300 backdrop-blur-sm">
                                        <span>Browse</span>
                                        <svg className="w-5 h-5 transition-transform group-hover:rotate-180 duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>

                                    {/* Enhanced Mega Menu */}
                                    <div className="absolute top-full right-0 w-screen max-w-5xl bg-white shadow-2xl border-2 border-purple-200 rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                                        <div className="p-10">
                                            <div className="grid grid-cols-4 gap-10">
                                                {/* Column 1: Themes */}
                                                <div>
                                                    <h3 className="font-black text-purple-900 mb-5 text-xl flex items-center">
                                                        <span className="mr-2">🎨</span> Themes
                                                    </h3>
                                                    <div className="space-y-3">
                                                        <a href="#" className="block text-gray-700 hover:text-purple-600 transition-colors font-medium hover:translate-x-1 transform duration-200">Dark Mode</a>
                                                        <a href="#" className="block text-gray-700 hover:text-purple-600 transition-colors font-medium hover:translate-x-1 transform duration-200">Abstract Art</a>
                                                        <a href="#" className="block text-gray-700 hover:text-purple-600 transition-colors font-medium hover:translate-x-1 transform duration-200">Neon Vibes</a>
                                                        <a href="#" className="block text-gray-700 hover:text-purple-600 transition-colors font-medium hover:translate-x-1 transform duration-200">Vintage</a>
                                                        <a href="#" className="block text-gray-700 hover:text-purple-600 transition-colors font-medium hover:translate-x-1 transform duration-200">Futuristic</a>
                                                    </div>
                                                </div>

                                                {/* Column 2: Trending */}
                                                <div>
                                                    <h3 className="font-black text-purple-900 mb-5 text-xl flex items-center">
                                                        <span className="mr-2">🔥</span> Trending
                                                    </h3>
                                                    <div className="space-y-3">
                                                        <a href="#" className="block text-gray-700 hover:text-purple-600 transition-colors font-medium hover:translate-x-1 transform duration-200">4K Wallpapers</a>
                                                        <a href="#" className="block text-gray-700 hover:text-purple-600 transition-colors font-medium hover:translate-x-1 transform duration-200">Ultra HD Images</a>
                                                        <a href="#" className="block text-gray-700 hover:text-purple-600 transition-colors font-medium hover:translate-x-1 transform duration-200">Gaming Backgrounds</a>
                                                        <a href="#" className="block text-gray-700 hover:text-purple-600 transition-colors font-medium hover:translate-x-1 transform duration-200">Anime Art</a>
                                                        <a href="#" className="block text-gray-700 hover:text-purple-600 transition-colors font-medium hover:translate-x-1 transform duration-200">Desktop Themes</a>
                                                    </div>
                                                </div>

                                                {/* Column 3: Collections */}
                                                <div>
                                                    <h3 className="font-black text-purple-900 mb-5 text-xl flex items-center">
                                                        <span className="mr-2">📁</span> Galleries
                                                    </h3>
                                                    <div className="space-y-3">
                                                        <a href="#" className="block text-gray-700 hover:text-purple-600 transition-colors font-medium hover:translate-x-1 transform duration-200">Seasonal</a>
                                                        <a href="#" className="block text-gray-700 hover:text-purple-600 transition-colors font-medium hover:translate-x-1 transform duration-200">Festival Special</a>
                                                        <a href="#" className="block text-gray-700 hover:text-purple-600 transition-colors font-medium hover:translate-x-1 transform duration-200">Color Schemes</a>
                                                        <a href="#" className="block text-gray-700 hover:text-purple-600 transition-colors font-medium hover:translate-x-1 transform duration-200">Gradient Packs</a>
                                                        <a href="#" className="block text-gray-700 hover:text-purple-600 transition-colors font-medium hover:translate-x-1 transform duration-200">Pattern Library</a>
                                                    </div>
                                                </div>

                                                {/* Column 4: Premium */}
                                                <div>
                                                    <h3 className="font-black text-purple-900 mb-5 text-xl flex items-center">
                                                        <span className="mr-2">⭐</span> Premium
                                                    </h3>
                                                    <div className="space-y-3">
                                                        <a href="#" className="block text-gray-700 hover:text-purple-600 transition-colors font-medium hover:translate-x-1 transform duration-200">Curated Selection</a>
                                                        <a href="#" className="block text-gray-700 hover:text-purple-600 transition-colors font-medium hover:translate-x-1 transform duration-200">Hot This Week</a>
                                                        <a href="#" className="block text-gray-700 hover:text-purple-600 transition-colors font-medium hover:translate-x-1 transform duration-200">Fresh Uploads</a>
                                                        <a href="#" className="block text-gray-700 hover:text-purple-600 transition-colors font-medium hover:translate-x-1 transform duration-200">Top Rated</a>
                                                        <a href="#" className="block text-gray-700 hover:text-purple-600 transition-colors font-medium hover:translate-x-1 transform duration-200">Exclusive Content</a>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Enhanced Tags Section */}
                                            <div className="mt-10 pt-8 border-t-2 border-purple-100">
                                                <h4 className="font-bold text-purple-900 mb-4 text-lg">🏷️ Quick Search Tags</h4>
                                                <div className="flex flex-wrap gap-3">
                                                    {['aesthetic', 'dark', 'neon', 'space', 'gradient', 'anime', 'landscape', 'urban', 'retro', 'cyberpunk'].map(keyword => (
                                                        <a
                                                            key={keyword}
                                                            href="#"
                                                            className="px-4 py-2 bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-700 rounded-xl text-sm font-semibold hover:from-purple-200 hover:to-indigo-200 hover:shadow-md transition-all duration-200 transform hover:scale-105"
                                                        >
                                                            #{keyword}
                                                        </a>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </nav>

                            {/* Auth Buttons */}
                            <div className="flex items-center space-x-4">
                                <button className="text-white hover:text-yellow-300 font-bold transition-all duration-200">
                                    Sign In
                                </button>
                                <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-purple-900 px-6 py-2.5 rounded-xl hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 font-black shadow-lg hover:shadow-xl transform hover:scale-105">
                                    Join Free
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <section className="relative py-32 md:py-40 bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-800 overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 opacity-30"
                    style={{
                        backgroundImage: 'url("https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg?auto=compress&cs=tinysrgb&w=1920")'
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 via-indigo-900/80 to-purple-900/90"></div>
                    <div className="absolute inset-0 bg-black/30"></div>
                </div>

                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center text-white max-w-5xl mx-auto">
                        <h1 className="text-3xl md:text-4xl lg:text-7xl font-black mb-8 leading-tight">
                            Unlock Premium Quality Images
                        </h1>
                        <p className="text-xl md:text-2xl lg:text-2xl text-gray-100 mb-10 leading-relaxed font-medium">
                            Access <span className="font-black text-yellow-300">millions</span> of stunning high-resolution images,
                            {' '}<span className="font-black text-yellow-300">backgrounds</span>, and {' '}
                            <span className="font-black text-yellow-300">wallpapers</span> absolutely free
                        </p>
                        <div className="flex justify-center items-center space-x-12 mb-12">
                            <div className="text-center">
                                <div className="text-4xl font-black text-yellow-300">6M+</div>
                                <div className="text-gray-200 text-base font-semibold">Premium Images</div>
                            </div>
                            <div className="w-1 h-10 bg-purple-400"></div>
                            <div className="text-center">
                                <div className="text-4xl font-black text-yellow-300">250K+</div>
                                <div className="text-gray-200 text-base font-semibold">Creative Artists</div>
                            </div>
                            <div className="w-1 h-10 bg-purple-400"></div>
                            <div className="text-center">
                                <div className="text-4xl font-black text-yellow-300">100%</div>
                                <div className="text-gray-200 text-base font-semibold">Free Access</div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center py-8">
                            <button
                                onClick={() => {
                                    const scrollContainer = document.getElementById('theme-selector');
                                    if (scrollContainer) {
                                        scrollContainer.scrollBy({ left: -180, behavior: 'smooth' });
                                    }
                                }}
                                className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md border-2 border-white/50 transition-all duration-300 mr-3 shadow-lg hover:shadow-xl"
                            >
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>

                            <div
                                id="theme-selector"
                                className="flex items-center space-x-4 overflow-x-hidden max-w-3xl scroll-smooth px-3"
                            >
                                {themeOptions.map((theme) => (
                                    <button
                                        key={theme.term}
                                        onClick={() => loadPictures(theme.term)}
                                        className="flex-shrink-0 text-white hover:text-yellow-300 bg-white/15 hover:bg-white/25 px-6 py-3 rounded-2xl transition-all duration-300 backdrop-blur-md border-2 border-white/30 hover:border-yellow-300 font-bold text-base whitespace-nowrap shadow-lg hover:shadow-xl transform hover:scale-105"
                                    >
                                        {theme.label}
                                    </button>
                                ))}
                            </div>

                            <button
                                onClick={() => {
                                    const scrollContainer = document.getElementById('theme-selector');
                                    if (scrollContainer) {
                                        scrollContainer.scrollBy({ left: 180, behavior: 'smooth' });
                                    }
                                }}
                                className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md border-2 border-white/50 transition-all duration-300 ml-3 shadow-lg hover:shadow-xl"
                            >
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>

                    </div>
                </div>
            </section>

            <main className="container mx-auto px-4 py-12">
                {isLoading ? (
                    <div className="flex justify-center items-center py-20">
                        <div className="relative">
                            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-purple-600"></div>
                            <div className="absolute top-0 left-0 animate-ping rounded-full h-16 w-16 border-4 border-purple-400 opacity-30"></div>
                        </div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-7">
                        {photosCollection.map((pic) => (
                            <div
                                key={pic.id}
                                className="group relative cursor-pointer rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 border-transparent hover:border-purple-400"
                                onClick={() => setChosephoto(pic)}
                            >
                                <img
                                    src={pic.webformatURL}
                                    alt={pic.tags}
                                    className="w-full h-72 object-cover group-hover:brightness-110 transition-all duration-300"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                                        <div className="flex items-center space-x-4 text-white text-sm font-semibold">
                                            <span className="flex items-center space-x-1.5">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                </svg>
                                                <span>{pic.views}</span>
                                            </span>

                                            <span className="flex items-center space-x-1.5">
                                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                                </svg>
                                                <span>{pic.likes}</span>
                                            </span>

                                            <span className="flex items-center space-x-1.5">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                                </svg>
                                                <span>{pic.downloads}</span>
                                            </span>
                                        </div>
                                        <div className="mt-2 text-xs font-bold opacity-95">
                                            By {pic.user}
                                        </div>
                                    </div>
                                    <button className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white p-2.5 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 hover:from-purple-600 hover:to-indigo-700 shadow-lg"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </main>

            {/* Enhanced Footer */}
            <footer className="bg-gradient-to-r from-purple-900 via-indigo-900 to-purple-900 border-t-4 border-yellow-400 mt-20">
                <div className="container mx-auto px-4 py-10">
                    <div className="text-center text-white">
                        <div className="flex items-center justify-center space-x-2 mb-4">
                            <svg className="w-10 h-10 text-yellow-300" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
                            </svg>
                            <p className="text-2xl font-black text-yellow-300">ImageVault</p>
                        </div>
                        <p className="text-lg font-semibold">© 2024 ImageVault. Premium images for creative minds.</p>
                        <p className="text-sm mt-3 text-purple-200">Powered by Pixabay Community</p>
                    </div>
                </div>
            </footer>

        </div>
    );
}
