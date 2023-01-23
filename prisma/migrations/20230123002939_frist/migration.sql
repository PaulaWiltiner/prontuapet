-- CreateTable
CREATE TABLE "gender" (
    "id" SERIAL NOT NULL,
    "name" SERIAL NOT NULL,

    CONSTRAINT "gender_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pet" (
    "id" SERIAL NOT NULL,
    "petName" SERIAL NOT NULL,
    "RGA" SERIAL NOT NULL,
    "photo" SERIAL NOT NULL,
    "species" INTEGER NOT NULL,
    "gender" INTEGER NOT NULL,
    "breed" SERIAL NOT NULL,
    "castred" SERIAL NOT NULL,
    "coat" SERIAL NOT NULL,

    CONSTRAINT "pet_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "species" (
    "id" SERIAL NOT NULL,
    "name" SERIAL NOT NULL,

    CONSTRAINT "species_pk" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "pet_RGA_key" ON "pet"("RGA");

-- CreateIndex
CREATE UNIQUE INDEX "pet_photo_key" ON "pet"("photo");

-- AddForeignKey
ALTER TABLE "pet" ADD CONSTRAINT "pet_gender_fkey" FOREIGN KEY ("gender") REFERENCES "gender"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "pet" ADD CONSTRAINT "pet_species_fkey" FOREIGN KEY ("species") REFERENCES "species"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
