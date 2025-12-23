import MemberForm from '../components/MemberForm';

const AddMember = () => {
    return (
        <div className="py-12 max-w-2xl mx-auto">
            <div className="text-center mb-10">
                <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 mb-4">
                    Add New Member
                </h1>
                <p className="text-gray-400">
                    Enter the details below to register a new member to GymPro.
                </p>
            </div>
            <MemberForm />
        </div>
    );
};

export default AddMember;
