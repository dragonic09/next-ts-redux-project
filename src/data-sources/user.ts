import { Profile } from "../types/store";

export const getProfiles = async (userId: number): Promise<Profile[]> => {
    return [
        {
            id: 0,
            name: 'test1',
            imageUrl: ''
        },
        {
            id: 1,
            name: 'test2',
            imageUrl: ''
        },
        {
            id: 2,
            name: 'test3',
            imageUrl: ''
        },
        {
            id: 3,
            name: 'test10',
            imageUrl: ''
        },
        {
            id: 4,
            name: 'test11',
            imageUrl: ''
        }
    ]
};

export const addProfile = async (userId: number): Promise<void> => {

};

export const removeProfile = async (auserId: number, profileId: number): Promise<void> => {

};