export interface Member {
    _id: string; // Backend usually returns _id
    name: string;
    age: number;
    membershipType: string;
    duration: number;
    fees: number;
    joinDate: string;
}

export type MemberFormData = Omit<Member, '_id' | 'joinDate'>;
