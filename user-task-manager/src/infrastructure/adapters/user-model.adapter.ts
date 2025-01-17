import { Injectable } from "@nestjs/common";
import { UserModelPort } from "../../core-task-manager/application/ports/user-model.port"
import { User } from "../shared/types";
import { UserModel } from "../database/models/user.model";

@Injectable()
export class UserModelAdapter implements UserModelPort {
    async createUser(user: User): Promise<User> {
        return await UserModel.create(user);
    }

    async getUser(userId: number): Promise<User> {
        return await UserModel.findByPk(userId);
    }

    async findUserByUsername(username: string): Promise<User> {
        return await UserModel.findOne({ where: { username } });
    }

}