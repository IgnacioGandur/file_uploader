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

    async getFolderNameById(folderId) {
        try {
            const folderName = await this.prisma.folder.findUnique({
                where: {
                    id: Number(folderId),
                },
                select: {
                    name: true,
                },
            });
            console.log("content of folder name is: ", folderName);

            return folderName;
        } catch (error) {
            console.error(
                "Something went wrong when trying to get the folder name by it's id.",
            );
            throw new Error(error);
        }
    }
}

export default new FolderModel(prisma);
