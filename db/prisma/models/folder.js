import prisma from "../prismaClient.js";

class FolderModel {
    constructor(prisma) {
        this.prisma = prisma;
    }

    async createFolder(username, name, cloudinary_path) {
        try {
            await this.prisma.folder.create({
                data: {
                    name: name,
                    userFolderName: username,
                    cloudinary_path: cloudinary_path,
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

            return folderName;
        } catch (error) {
            console.error(
                "Something went wrong when trying to get the folder name by it's id.",
            );
            throw new Error(error);
        }
    }

    async updateFolderName(folderName, username, updatedName) {
        try {
            await this.prisma.folder.update({
                where: {
                    name_userFolderName: {
                        name: folderName,
                        userFolderName: username,
                    },
                },
                data: {
                    name: updatedName,
                },
            });
        } catch (error) {
            console.error(
                "Something went wrong when trying to updated folder name.",
            );
            throw new Error(error);
        }
    }

    async getFolderByName(username, folderName) {
        try {
            const folder = await this.prisma.folder.findFirst({
                where: {
                    name: folderName,
                    userFolderName: username,
                },
                include: {
                    files: true,
                },
            });

            return folder;
        } catch (error) {
            console.error(
                "Something went wrong when trying to get folder name.",
            );
            throw new Error(error);
        }
    }

    async deleteFolder(username, folderName) {
        try {
            await this.prisma.folder.delete({
                where: {
                    name_userFolderName: {
                        name: folderName,
                        userFolderName: username,
                    },
                },
            });
        } catch (error) {
            console.error(
                "Something went wrong when trying to delete a folder.",
            );
            throw new Error(error);
        }
    }

    async checkIfFolderNameIsAvailable(username, folderName) {
        try {
            const result = await this.prisma.folder.findUnique({
                where: {
                    name_userFolderName: {
                        name: folderName,
                        userFolderName: username,
                    },
                },
            });

            if (result) {
                return false;
            } else {
                return true;
            }
        } catch (error) {
            console.error("Prisma error:", error.message);
            throw new Error(
                "Something went wrong when trying to check if the folder name is available.",
            );
        }
    }
}

export default new FolderModel(prisma);
