import { UserDomainPort, UserServicePort } from "../ports";
import { User } from "../../../infrastructure/shared/types/user";

export class UserService implements UserServicePort {
    constructor(private readonly userDomainPort: UserDomainPort) {}

    async createUser(user: User): Promise<User> {
        return this.userDomainPort.createUser(user);
    }

    async findUserByUsername(username: string): Promise<User> {
        return this.userDomainPort.findUserByUsername(username);
    }

    async getUser(userId: number): Promise<User> {
        return this.userDomainPort.getUser(userId);
    }
}