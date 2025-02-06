import prisma from "../prismaClient.js";

class File {
    constructor(prisma) {
        this.prisma = prisma;
    }

    async createFile(
        name,
        fileExtension,
        mimetype,
        size,
        username,
        folderId,
        destination,
        path,
    ) {
        try {
            await this.prisma.file.create({
                data: {
                    name: name,
                    fileExtension: fileExtension,
                    mimetype: mimetype,
                    size: size,
                    userFolderName: username,
                    folderId: folderId ? Number(folderId) : null,
                    destination: destination,
                    path: path,
                },
            });
        } catch (error) {
            console.error("Something went wrong when trying to create a file.");
            throw new Error(error);
        }
    }

    async updateFileName(fileId, username, updatedFileName) {
        try {
            await this.prisma.file.update({
                where: {
                    id: Number(fileId),
                    userFolderName: username,
                },
                data: {
                    name: updatedFileName,
                },
            });
        } catch (error) {
            console.error(
                "Something went wrong when trying to update the file name.",
            );
            throw new Error(error);
        }
    }

    async getFileById(fileId) {
        try {
            const file = await this.prisma.file.findUnique({
                where: {
                    id: Number(fileId),
                },
            });

            return file;
        } catch (error) {
            console.error(
                "Something went wrong when trying to get file by it's id.",
            );
            throw new Error(error);
        }
    }

    async deleteFile(fileId, username) {
        try {
            await this.prisma.file.delete({
                where: {
                    id: Number(fileId),
                    userFolderName: username,
                },
            });
        } catch (error) {
            console.error(
                "Something went wrong when trying to delete a file by it's id.",
            );
            throw new Error(error);
        }
    }
}

export default new File(prisma);
