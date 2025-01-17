import { UserDomainPort } from "../application/ports";
import { User } from "../../infrastructure/shared/types";

export class UserDomain implements UserDomainPort {
    constructor(
        private userModelPort: UserDomainPort
    ) {}

    async createUser(user: User): Promise<User> {
        const _user = await this.userModelPort.createUser(user);
        return _user;
    }

    async getUser(userId: number): Promise<User> {
        const user = await this.userModelPort.getUser(userId);
        return user;
    }

    async findUserByUsername(username: string): Promise<User> {
        const user = await this.userModelPort.findUserByUsername(username);
        return user;
    }
}