/*
  Warnings:

  - You are about to drop the column `userFolderId` on the `File` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name,folderId]` on the table `File` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name,userFolderName]` on the table `File` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `size` to the `File` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userFolderName` to the `File` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "File" DROP CONSTRAINT "File_folderId_fkey";

-- DropForeignKey
ALTER TABLE "File" DROP CONSTRAINT "File_userFolderId_fkey";

-- DropForeignKey
ALTER TABLE "Folder" DROP CONSTRAINT "Folder_userFolderName_fkey";

-- DropForeignKey
ALTER TABLE "UserFolder" DROP CONSTRAINT "UserFolder_ownerId_fkey";

-- DropIndex
DROP INDEX "File_name_fileExtension_mimetype_folderId_key";

-- DropIndex
DROP INDEX "File_name_fileExtension_mimetype_userFolderId_key";

-- AlterTable
ALTER TABLE "File" DROP COLUMN "userFolderId",
ADD COLUMN     "size" BIGINT NOT NULL,
ADD COLUMN     "userFolderName" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "joinedOn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateIndex
CREATE UNIQUE INDEX "File_name_folderId_key" ON "File"("name", "folderId");

-- CreateIndex
CREATE UNIQUE INDEX "File_name_userFolderName_key" ON "File"("name", "userFolderName");

-- AddForeignKey
ALTER TABLE "UserFolder" ADD CONSTRAINT "UserFolder_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Folder" ADD CONSTRAINT "Folder_userFolderName_fkey" FOREIGN KEY ("userFolderName") REFERENCES "UserFolder"("name") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "File" ADD CONSTRAINT "File_userFolderName_fkey" FOREIGN KEY ("userFolderName") REFERENCES "UserFolder"("name") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "File" ADD CONSTRAINT "File_folderId_fkey" FOREIGN KEY ("folderId") REFERENCES "Folder"("id") ON DELETE CASCADE ON UPDATE CASCADE;
