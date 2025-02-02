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
}

export default new UserFolder(prisma);
