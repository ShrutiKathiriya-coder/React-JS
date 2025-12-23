import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaEdit, FaTrash, FaUser, FaClock, FaMoneyBillWave, FaCalendarAlt } from 'react-icons/fa';
import type { Member } from '../types';
import { useNavigate } from 'react-router-dom';

interface MemberModalProps {
    member: Member | null;
    isOpen: boolean;
    onClose: () => void;
    onDelete: (id: string) => void;
}

const MemberModal = ({ member, isOpen, onClose, onDelete }: MemberModalProps) => {
    const navigate = useNavigate();

    if (!isOpen || !member) return null;

    const handleDelete = () => {
        if (window.confirm('Are you sure you want to delete this member?')) {
            onDelete(member._id);
            onClose();
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        onClick={onClose}
                    />
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        className="relative bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-md overflow-hidden shadow-2xl"
                    >
                        {/* Header */}
                        <div className="relative h-32 bg-gradient-to-r from-blue-600 to-purple-600">
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 p-2 bg-black/20 hover:bg-black/40 rounded-full text-white transition-colors"
                            >
                                <FaTimes />
                            </button>
                            <div className="absolute -bottom-12 left-8">
                                <div className="w-24 h-24 rounded-full bg-slate-900 p-1">
                                    <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center border-2 border-blue-500">
                                        <FaUser className="text-4xl text-gray-400" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Body */}
                        <div className="pt-16 pb-8 px-8">
                            <h2 className="text-2xl font-bold text-white mb-1">{member.name}</h2>
                            <p className="text-blue-400 font-medium mb-6">{member.membershipType} Member</p>

                            <div className="space-y-4">
                                <div className="flex items-center gap-3 text-gray-300">
                                    <FaUser className="text-gray-500" />
                                    <span>Age: {member.age} years</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-300">
                                    <FaClock className="text-gray-500" />
                                    <span>Duration: {member.duration} Months</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-300">
                                    <FaMoneyBillWave className="text-gray-500" />
                                    <span>Fees: ${member.fees}</span>
                                </div>
                                {/* Check if joinDate exists and is valid */}
                                <div className="flex items-center gap-3 text-gray-300">
                                    <FaCalendarAlt className="text-gray-500" />
                                    <span>Joined: {new Date(Number(member.joinDate) || Date.now()).toLocaleDateString()}</span>
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="flex gap-4 mt-8">
                                <button
                                    onClick={() => navigate(`/update-member/${member._id}`)}
                                    className="flex-1 py-3 bg-blue-600 rounded-xl font-semibold text-white hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                                >
                                    <FaEdit /> Update
                                </button>
                                <button
                                    onClick={handleDelete}
                                    className="flex-1 py-3 bg-red-600/10 border border-red-600/50 rounded-xl font-semibold text-red-500 hover:bg-red-600 hover:text-white transition-colors flex items-center justify-center gap-2"
                                >
                                    <FaTrash /> Delete
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default MemberModal;
