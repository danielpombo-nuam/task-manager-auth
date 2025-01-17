import { User } from '../../../infrastructure/shared/types/user';

export interface UserDomainPort {
    createUser(user: User): Promise<User>;
    getUser(userId: number): Promise<User>;
    findUserByUsername(username: string): Promise<User>;
}