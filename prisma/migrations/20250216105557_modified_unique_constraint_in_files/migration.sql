/*
  Warnings:

  - A unique constraint covering the columns `[name,userFolderName,folderId]` on the table `File` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "File_name_folderId_key";

-- DropIndex
DROP INDEX "File_name_userFolderName_key";

-- CreateIndex
CREATE UNIQUE INDEX "File_name_userFolderName_folderId_key" ON "File"("name", "userFolderName", "folderId");
