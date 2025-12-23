import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import apiClient from '../api/client';
import MemberForm from '../components/MemberForm';
import type { Member } from '../types';
import { toast } from 'react-hot-toast';

const EditMember = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [member, setMember] = useState<Member | undefined>(undefined);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMember = async () => {
            try {
                const response = await apiClient.get(`/${id}`);
                setMember(response.data.data);
            } catch (error) {
                toast.error('Could not load member details');
                navigate('/view-members');
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchMember();
        }
    }, [id, navigate]);

    if (loading) {
        return <div className="text-center py-20 text-white">Loading member details...</div>;
    }

    return (
        <div className="py-12 max-w-2xl mx-auto">
            <div className="text-center mb-10">
                <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 mb-4">
                    Update Member
                </h1>
                <p className="text-gray-400">
                    Update the details for this member.
                </p>
            </div>
            {member && <MemberForm initialData={member} isEdit />}
        </div>
    );
};

export default EditMember;
