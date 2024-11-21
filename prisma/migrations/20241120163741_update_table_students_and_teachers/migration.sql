/*
  Warnings:

  - A unique constraint covering the columns `[username]` on the table `Students` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[username]` on the table `Teachers` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Students_username_key" ON "Students"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Teachers_username_key" ON "Teachers"("username");
