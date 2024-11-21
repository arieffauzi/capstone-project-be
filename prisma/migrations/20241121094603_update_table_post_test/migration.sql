-- DropForeignKey
ALTER TABLE "PostTest" DROP CONSTRAINT "PostTest_scored_by_id_fkey";

-- AlterTable
ALTER TABLE "PostTest" ALTER COLUMN "scored_by_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "PostTest" ADD CONSTRAINT "PostTest_scored_by_id_fkey" FOREIGN KEY ("scored_by_id") REFERENCES "Users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
