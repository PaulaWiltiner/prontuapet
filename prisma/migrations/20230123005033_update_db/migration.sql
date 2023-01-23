/*
  Warnings:

  - Changed the type of `castred` on the `pet` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "gender" ALTER COLUMN "name" DROP DEFAULT,
ALTER COLUMN "name" SET DATA TYPE TEXT;
DROP SEQUENCE "gender_name_seq";

-- AlterTable
ALTER TABLE "pet" ALTER COLUMN "petName" DROP DEFAULT,
ALTER COLUMN "petName" SET DATA TYPE TEXT,
ALTER COLUMN "RGA" DROP DEFAULT,
ALTER COLUMN "RGA" SET DATA TYPE TEXT,
ALTER COLUMN "photo" DROP DEFAULT,
ALTER COLUMN "photo" SET DATA TYPE TEXT,
ALTER COLUMN "breed" DROP DEFAULT,
ALTER COLUMN "breed" SET DATA TYPE TEXT,
DROP COLUMN "castred",
ADD COLUMN     "castred" BOOLEAN NOT NULL,
ALTER COLUMN "coat" DROP DEFAULT,
ALTER COLUMN "coat" SET DATA TYPE TEXT;
DROP SEQUENCE "pet_petName_seq";
DROP SEQUENCE "pet_RGA_seq";
DROP SEQUENCE "pet_photo_seq";
DROP SEQUENCE "pet_breed_seq";
DROP SEQUENCE "pet_coat_seq";

-- AlterTable
ALTER TABLE "species" ALTER COLUMN "name" DROP DEFAULT,
ALTER COLUMN "name" SET DATA TYPE TEXT;
DROP SEQUENCE "species_name_seq";

-- RenameForeignKey
ALTER TABLE "pet" RENAME CONSTRAINT "pet_gender_fkey" TO "pet_fk1";

-- RenameForeignKey
ALTER TABLE "pet" RENAME CONSTRAINT "pet_species_fkey" TO "pet_fk0";
