import prisma from "./prismaClient.js";

class PrismaInteractions {
    constructor(prisma) {
        this.prisma = prisma;
    }

    async insertUser(username, password) {
        try {
            await this.prisma.user.create({
                data: {
                    username: username,
                    password: password,
                },
            });
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
}

export default new PrismaInteractions(prisma);
