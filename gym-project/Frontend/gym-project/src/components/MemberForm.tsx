import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { motion } from 'framer-motion';
import { FaUser, FaIdCard, FaMoneyBillWave, FaSave, FaCalendarAlt } from 'react-icons/fa';
import apiClient from '../api/client';
import type { Member } from '../types';

const memberSchema = z.object({
    name: z.string().min(3, 'Name must be at least 3 characters'),
    age: z.coerce.number().min(5, 'Age must be at least 5').max(100, 'Age must be reasonable'),
    membershipType: z.string().min(1, 'Membership type is required'),
    duration: z.coerce.number().min(1, 'Duration must be at least 1 month'),
    fees: z.coerce.number().min(0, 'Fees cannot be negative'),
    joinDate: z.string().min(1, 'Join date is required'),
});

// Explicitly define the interface to satisfy RHF and Zod interaction
interface MemberFormValues {
    name: string;
    age: number;
    membershipType: string;
    duration: number;
    fees: number;
    joinDate: string;
}

interface MemberFormProps {
    initialData?: Member;
    isEdit?: boolean;
}

const MemberForm = ({ initialData, isEdit = false }: MemberFormProps) => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        setValue,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<MemberFormValues>({
        resolver: zodResolver(memberSchema) as any,
        defaultValues: {
            name: '',
            age: 18,
            membershipType: 'Monthly',
            duration: 1,
            fees: 0,
            joinDate: new Date().toISOString().split('T')[0],
        },
    });

    useEffect(() => {
        if (initialData) {
            setValue('name', initialData.name);
            setValue('age', initialData.age);
            setValue('membershipType', initialData.membershipType);
            setValue('duration', initialData.duration);
            setValue('fees', initialData.fees);
            setValue('joinDate', String(initialData.joinDate).split('T')[0]);
        }
    }, [initialData, setValue]);

    const onSubmit = async (data: MemberFormValues) => {
        try {
            if (isEdit && initialData?._id) {
                await apiClient.put(`/${initialData._id}`, data);
                toast.success('Member updated successfully!', {
                    icon: '🎉',
                    style: {
                        borderRadius: '10px',
                        background: '#333',
                        color: '#fff',
                    },
                });
            } else {
                await apiClient.post('/add', data);
                toast.success('Member added successfully!', {
                    icon: '💪',
                    style: {
                        borderRadius: '10px',
                        background: '#333',
                        color: '#fff',
                    },
                });
                reset();
            }
            navigate('/view-members');
        } catch (error) {
            console.error('Submission error:', error);
            toast.error('Failed to save member. Please try again.');
        }
    };

    const inputClasses = "w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 pl-10 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors";
    const labelClasses = "block text-sm font-medium text-gray-400 mb-1";
    const errorClasses = "text-red-400 text-xs mt-1 absolute";

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl"
        >
            <form onSubmit={handleSubmit(onSubmit as any)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="relative group">
                        <label className={labelClasses}>Full Name</label>
                        <div className="relative">
                            <FaUser className="absolute left-3 top-3.5 text-gray-500 group-focus-within:text-blue-500 transition-colors" />
                            <input
                                {...register('name')}
                                placeholder="John Doe"
                                className={inputClasses}
                            />
                        </div>
                        {errors.name && <p className={errorClasses}>{errors.name.message}</p>}
                    </div>

                    {/* Age */}
                    <div className="relative group">
                        <label className={labelClasses}>Age</label>
                        <div className="relative">
                            <FaIdCard className="absolute left-3 top-3.5 text-gray-500 group-focus-within:text-blue-500 transition-colors" />
                            <input
                                type="number"
                                {...register('age')}
                                className={inputClasses}
                            />
                        </div>
                        {errors.age && <p className={errorClasses}>{errors.age.message}</p>}
                    </div>

                    {/* Membership Type */}
                    <div className="relative group">
                        <label className={labelClasses}>Membership Type</label>
                        <div className="relative">
                            <FaIdCard className="absolute left-3 top-3.5 text-gray-500 group-focus-within:text-blue-500 transition-colors" />
                            <select {...register('membershipType')} className={`${inputClasses} appearance-none`}>
                                <option value="Monthly">Monthly Plan</option>
                                <option value="Quarterly">Quarterly Plan</option>
                                <option value="Half-Yearly">Half-Yearly Plan</option>
                                <option value="Yearly">Yearly Plan</option>
                                <option value="Personal Training">Personal Training</option>
                            </select>
                        </div>
                        {errors.membershipType && <p className={errorClasses}>{errors.membershipType.message}</p>}
                    </div>

                    {/* Duration */}
                    <div className="relative group">
                        <label className={labelClasses}>Duration (Months)</label>
                        <div className="relative">
                            <FaCalendarAlt className="absolute left-3 top-3.5 text-gray-500 group-focus-within:text-blue-500 transition-colors" />
                            <input
                                type="number"
                                {...register('duration')}
                                className={inputClasses}
                            />
                        </div>
                        {errors.duration && <p className={errorClasses}>{errors.duration.message}</p>}
                    </div>

                    {/* Fees */}
                    <div className="relative group md:col-span-2">
                        <label className={labelClasses}>Fees Amount</label>
                        <div className="relative">
                            <FaMoneyBillWave className="absolute left-3 top-3.5 text-gray-500 group-focus-within:text-blue-500 transition-colors" />
                            <input
                                type="number"
                                {...register('fees')}
                                className={inputClasses}
                            />
                        </div>
                        {errors.fees && <p className={errorClasses}>{errors.fees.message}</p>}
                    </div>

                    {/* Join Date */}
                    <div className="relative group">
                        <label className={labelClasses}>Join Date</label>
                        <div className="relative">
                            <FaCalendarAlt className="absolute left-3 top-3.5 text-gray-500 group-focus-within:text-blue-500 transition-colors" />
                            <input
                                type="date"
                                {...register('joinDate')}
                                className={inputClasses}
                            />
                        </div>
                        {errors.joinDate && <p className={errorClasses}>{errors.joinDate.message}</p>}
                    </div>
                </div>

                <div className="pt-4">
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-3 px-4 rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <FaSave />
                        {isSubmitting ? 'Saving...' : (isEdit ? 'Update Member' : 'Add Member')}
                    </button>
                </div>
            </form>
        </motion.div>
    );
};

export default MemberForm;
