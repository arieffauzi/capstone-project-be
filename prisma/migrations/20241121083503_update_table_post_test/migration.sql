/*
  Warnings:

  - Added the required column `answer` to the `PostTest` table without a default value. This is not possible if the table is not empty.
  - Added the required column `score` to the `PostTest` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PostTest" ADD COLUMN     "answer" TEXT NOT NULL,
ADD COLUMN     "score" INTEGER NOT NULL;
