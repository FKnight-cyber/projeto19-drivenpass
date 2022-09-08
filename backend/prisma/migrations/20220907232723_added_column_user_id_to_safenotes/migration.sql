/*
  Warnings:

  - Added the required column `userId` to the `safenotes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "safenotes" ADD COLUMN     "userId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "safenotes" ADD CONSTRAINT "safenotes_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
