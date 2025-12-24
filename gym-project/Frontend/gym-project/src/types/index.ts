export interface Member {
    _id: string; 
    name: string;
    age: number;
    membershipType: string;
    duration: number;
    fees: number;
    joinDate: string;
}

export type MemberFormData = Omit<Member, '_id' | 'joinDate'>;
