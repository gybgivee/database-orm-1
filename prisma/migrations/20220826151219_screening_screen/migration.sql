/*
  Warnings:

  - Added the required column `screenId` to the `Screening` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Screening" ADD COLUMN     "screenId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Screen" (
    "id" SERIAL NOT NULL,
    "number" INTEGER NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Screen_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Screen_number_key" ON "Screen"("number");

-- AddForeignKey
ALTER TABLE "Screening" ADD CONSTRAINT "Screening_screenId_fkey" FOREIGN KEY ("screenId") REFERENCES "Screen"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
