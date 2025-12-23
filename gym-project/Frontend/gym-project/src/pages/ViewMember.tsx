import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaSearch } from 'react-icons/fa';
import apiClient from '../api/client';
import type { Member } from '../types';
import MemberModal from '../components/MemberModal';
import { toast } from 'react-hot-toast';

const ViewMember = () => {
    const [members, setMembers] = useState<Member[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedMember, setSelectedMember] = useState<Member | null>(null);
    const [searchTerm, setSearchTerm] = useState('');

    const fetchMembers = async () => {
        try {
            const response = await apiClient.get('/');
            setMembers(response.data.data);
        } catch (error) {
            console.error('Error fetching members:', error);
            toast.error('Failed to load members');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchMembers();
    }, []);

    const handleDelete = async (id: string) => {
        try {
            await apiClient.delete(`/${id}`);
            toast.success('Member deleted successfully');
            setMembers(prev => prev.filter(m => m._id !== id));
            setSelectedMember(null);
        } catch (error) {
            toast.error('Failed to delete member');
        }
    };

    const filteredMembers = members.filter(member =>
        member.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="py-8">
            <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
                <div>
                    <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                        Gym Members
                    </h1>
                    <p className="text-gray-400 mt-2">Manage and view all registered members</p>
                </div>

                <div className="relative w-full md:w-64">
                    <FaSearch className="absolute left-3 top-3.5 text-gray-500" />
                    <input
                        type="text"
                        placeholder="Search members..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full bg-slate-900 border border-slate-800 rounded-full py-2 pl-10 pr-4 text-white focus:outline-none focus:border-blue-500 transition-colors"
                    />
                </div>
            </div>

            {loading ? (
                <div className="text-center py-20">
                    <div className="animate-spin text-4xl text-blue-500 mx-auto mb-4">
                        <FaUser /> {/* Placeholder for spinner */}
                    </div>
                    <p className="text-gray-400">Loading members...</p>
                </div>
            ) : filteredMembers.length === 0 ? (
                <div className="text-center py-20 bg-slate-900/50 rounded-2xl border border-white/5">
                    <p className="text-gray-400 text-xl">No members found.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredMembers.map((member) => (
                        <motion.div
                            key={member._id}
                            layoutId={member._id}
                            onClick={() => setSelectedMember(member)}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)' }}
                            className="bg-slate-900 border border-slate-800 rounded-xl p-6 cursor-pointer group hover:border-blue-500/50 transition-all duration-300"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                    <FaUser />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-white group-hover:text-blue-400 transition-colors line-clamp-1">{member.name}</h3>
                                    <span className="text-xs text-slate-500 uppercase tracking-wider">{member.membershipType}</span>
                                </div>
                            </div>
                            <div className="space-y-2 text-sm text-gray-400">
                                <p className="flex justify-between">
                                    <span>Age:</span> <span className="text-white">{member.age}</span>
                                </p>
                                <p className="flex justify-between">
                                    <span>Fees:</span> <span className="text-white font-mono">${member.fees}</span>
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            )}

            <MemberModal
                member={selectedMember}
                isOpen={!!selectedMember}
                onClose={() => setSelectedMember(null)}
                onDelete={handleDelete}
            />
        </div>
    );
};

export default ViewMember;
