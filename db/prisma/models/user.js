import prisma from "../prismaClient.js";

class User {
    constructor(prisma) {
        this.prisma = prisma;
    }

    async createUser(username, password) {
        try {
            const result = await this.prisma.user.create({
                data: {
                    username: username,
                    password: password,
                },
            });
            return result.id;
        } catch (error) {
            console.error(
                "Something went wrong when trying to insert a new user.",
            );
            throw new Error(error);
        }
    }

    async getUserByUsername(username) {
        try {
            const user = await this.prisma.user.findUnique({
                where: {
                    username: username,
                },
            });

            return user;
        } catch (error) {
            console.error(
                "Something went wrong when trying to get user by username.",
            );
            throw new Error(error);
        }
    }

    async getUserById(userId) {
        try {
            const user = await prisma.user.findUnique({
                where: {
                    id: userId,
                },
            });

            return user;
        } catch (error) {
            console.error(
                "Something went wrong when trying to get user by it's id.",
            );
            throw new Error(error);
        }
    }
    async checkIfUsernameIsAlreadyTaken(username) {
        try {
            const result = await this.prisma.user.findUnique({
                where: {
                    username: username,
                },
            });

            if (result) {
                return true;
            } else {
                return false;
            }
        } catch (error) {
            console.error("Prisma error: ", error.message);
            throw new Error(
                "Something went wrong when trying to check if the username is already taken.",
            );
        }
    }
}

export default new User(prisma);
