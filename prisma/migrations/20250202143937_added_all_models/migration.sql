/*
  Warnings:

  - You are about to alter the column `username` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(30)`.

*/
-- AlterTable
ALTER TABLE "User" ALTER COLUMN "username" SET DATA TYPE VARCHAR(30);

-- CreateTable
CREATE TABLE "UserFolder" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR NOT NULL,
    "ownerId" INTEGER NOT NULL,

    CONSTRAINT "UserFolder_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Folder" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(30) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userFolderId" INTEGER NOT NULL,

    CONSTRAINT "Folder_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "File" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "fileExtension" VARCHAR(30) NOT NULL,
    "mimetype" VARCHAR(30) NOT NULL,
    "uploadedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userFolderId" INTEGER NOT NULL,
    "folderId" INTEGER NOT NULL,

    CONSTRAINT "File_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserFolder_name_key" ON "UserFolder"("name");

-- CreateIndex
CREATE UNIQUE INDEX "UserFolder_ownerId_key" ON "UserFolder"("ownerId");

-- CreateIndex
CREATE UNIQUE INDEX "Folder_userFolderId_key" ON "Folder"("userFolderId");

-- CreateIndex
CREATE UNIQUE INDEX "Folder_name_userFolderId_key" ON "Folder"("name", "userFolderId");

-- CreateIndex
CREATE UNIQUE INDEX "File_name_fileExtension_mimetype_folderId_key" ON "File"("name", "fileExtension", "mimetype", "folderId");

-- CreateIndex
CREATE UNIQUE INDEX "File_name_fileExtension_mimetype_userFolderId_key" ON "File"("name", "fileExtension", "mimetype", "userFolderId");

-- AddForeignKey
ALTER TABLE "UserFolder" ADD CONSTRAINT "UserFolder_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Folder" ADD CONSTRAINT "Folder_userFolderId_fkey" FOREIGN KEY ("userFolderId") REFERENCES "UserFolder"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "File" ADD CONSTRAINT "File_userFolderId_fkey" FOREIGN KEY ("userFolderId") REFERENCES "UserFolder"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "File" ADD CONSTRAINT "File_folderId_fkey" FOREIGN KEY ("folderId") REFERENCES "Folder"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
