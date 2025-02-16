/*
  Warnings:

  - You are about to drop the column `cloudinary_path` on the `File` table. All the data in the column will be lost.
  - Added the required column `cloudinary_public_id` to the `File` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "File" DROP COLUMN "cloudinary_path",
ADD COLUMN     "cloudinary_public_id" TEXT NOT NULL;
