/*
  Warnings:

  - You are about to drop the column `userFolderId` on the `Folder` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userFolderName]` on the table `Folder` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name,userFolderName]` on the table `Folder` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userFolderName` to the `Folder` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Folder" DROP CONSTRAINT "Folder_userFolderId_fkey";

-- DropIndex
DROP INDEX "Folder_name_userFolderId_key";

-- DropIndex
DROP INDEX "Folder_userFolderId_key";

-- AlterTable
ALTER TABLE "Folder" DROP COLUMN "userFolderId",
ADD COLUMN     "userFolderName" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Folder_userFolderName_key" ON "Folder"("userFolderName");

-- CreateIndex
CREATE UNIQUE INDEX "Folder_name_userFolderName_key" ON "Folder"("name", "userFolderName");

-- AddForeignKey
ALTER TABLE "Folder" ADD CONSTRAINT "Folder_userFolderName_fkey" FOREIGN KEY ("userFolderName") REFERENCES "UserFolder"("name") ON DELETE RESTRICT ON UPDATE CASCADE;
