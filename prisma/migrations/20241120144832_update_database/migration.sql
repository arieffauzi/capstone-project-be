/*
  Warnings:

  - You are about to drop the column `post_test` on the `Subjects` table. All the data in the column will be lost.
  - You are about to drop the `Answers` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `question` to the `Subjects` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Answers" DROP CONSTRAINT "Answers_leson_id_fkey";

-- DropForeignKey
ALTER TABLE "Answers" DROP CONSTRAINT "Answers_student_id_fkey";

-- AlterTable
ALTER TABLE "Subjects" DROP COLUMN "post_test",
ADD COLUMN     "question" TEXT NOT NULL;

-- DropTable
DROP TABLE "Answers";

-- CreateTable
CREATE TABLE "PostTest" (
    "id" SERIAL NOT NULL,
    "subject_id" INTEGER NOT NULL,
    "student_id" INTEGER NOT NULL,
    "score" TEXT NOT NULL,
    "scored_by" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PostTest_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PostTest" ADD CONSTRAINT "PostTest_subject_id_fkey" FOREIGN KEY ("subject_id") REFERENCES "Subjects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PostTest" ADD CONSTRAINT "PostTest_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "Students"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PostTest" ADD CONSTRAINT "PostTest_scored_by_fkey" FOREIGN KEY ("scored_by") REFERENCES "Teachers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
