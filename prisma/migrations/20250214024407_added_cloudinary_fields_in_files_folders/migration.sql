/*
  Warnings:

  - You are about to drop the column `destination` on the `File` table. All the data in the column will be lost.
  - Added the required column `cloudinary_path` to the `File` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cloudinary_url` to the `File` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cloudinary_path` to the `Folder` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "File" DROP COLUMN "destination",
ADD COLUMN     "cloudinary_path" TEXT NOT NULL,
ADD COLUMN     "cloudinary_url" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Folder" ADD COLUMN     "cloudinary_path" TEXT NOT NULL;
