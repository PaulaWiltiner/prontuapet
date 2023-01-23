/*
  Warnings:

  - You are about to drop the column `gender` on the `pet` table. All the data in the column will be lost.
  - You are about to drop the column `species` on the `pet` table. All the data in the column will be lost.
  - Added the required column `genderId` to the `pet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `speciesId` to the `pet` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "pet" DROP CONSTRAINT "pet_fk0";

-- DropForeignKey
ALTER TABLE "pet" DROP CONSTRAINT "pet_fk1";

-- AlterTable
ALTER TABLE "pet" DROP COLUMN "gender",
DROP COLUMN "species",
ADD COLUMN     "genderId" INTEGER NOT NULL,
ADD COLUMN     "speciesId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "pet" ADD CONSTRAINT "pet_genderId_fkey" FOREIGN KEY ("genderId") REFERENCES "gender"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "pet" ADD CONSTRAINT "pet_speciesId_fkey" FOREIGN KEY ("speciesId") REFERENCES "species"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
