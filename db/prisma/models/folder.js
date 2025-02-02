import prisma from "../prismaClient.js";

class FolderModel {
    constructor(prisma) {
        this.prisma = prisma;
    }

    async createFolder(username, name) {
        try {
            await this.prisma.folder.create({
                data: {
                    name: name,
                    userFolderName: username,
                },
            });
        } catch (error) {
            console.error(
                "Something went wrong when trying to create a folder.",
            );
            throw new Error(error);
        }
    }
}

export default new FolderModel(prisma);
