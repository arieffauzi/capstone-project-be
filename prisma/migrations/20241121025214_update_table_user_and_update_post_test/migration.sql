/*
  Warnings:

  - You are about to drop the column `score` on the `PostTest` table. All the data in the column will be lost.
  - You are about to drop the column `scored_by` on the `PostTest` table. All the data in the column will be lost.
  - You are about to drop the column `student_id` on the `PostTest` table. All the data in the column will be lost.
  - You are about to drop the `Students` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Teachers` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `scored_by_id` to the `PostTest` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "PostTest" DROP CONSTRAINT "PostTest_scored_by_fkey";

-- DropForeignKey
ALTER TABLE "PostTest" DROP CONSTRAINT "PostTest_student_id_fkey";

-- AlterTable
ALTER TABLE "PostTest" DROP COLUMN "score",
DROP COLUMN "scored_by",
DROP COLUMN "student_id",
ADD COLUMN     "assign_to_id" INTEGER,
ADD COLUMN     "scored_by_id" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Students";

-- DropTable
DROP TABLE "Teachers";

-- CreateTable
CREATE TABLE "Users" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role_id" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_username_key" ON "Users"("username");

-- AddForeignKey
ALTER TABLE "Users" ADD CONSTRAINT "Users_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "Role"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PostTest" ADD CONSTRAINT "PostTest_assign_to_id_fkey" FOREIGN KEY ("assign_to_id") REFERENCES "Users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PostTest" ADD CONSTRAINT "PostTest_scored_by_id_fkey" FOREIGN KEY ("scored_by_id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
