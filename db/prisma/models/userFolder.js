import prisma from "../prismaClient.js";

class UserFolder {
    constructor(prisma) {
        this.prisma = prisma;
    }

    async createUserFolder(name, ownerId) {
        try {
            await this.prisma.userFolder.create({
                data: {
                    name: name,
                    ownerId: ownerId,
                },
            });
        } catch (error) {
            console.error(
                "Something went wrong when trying to create the user folder.",
            );
            throw new Error(error);
        }
    }

    async getUserFolder(username) {
        try {
            const userFolder = await this.prisma.userFolder.findUnique({
                where: {
                    name: username,
                },
                include: {
                    folders: true,
                    files: true,
                },
            });

            return userFolder;
        } catch (error) {
            console.error(
                "Something went wrong when trying to get the user folder.",
            );
            throw new Error(error);
        }
    }
}

export default new UserFolder(prisma);
