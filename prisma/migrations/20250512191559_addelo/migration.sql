/*
  Warnings:

  - You are about to drop the column `mmr` on the `User` table. All the data in the column will be lost.
  - Added the required column `player1eloChange` to the `Match` table without a default value. This is not possible if the table is not empty.
  - Added the required column `player2eloChange` to the `Match` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Match" ADD COLUMN     "player1eloChange" INTEGER NOT NULL,
ADD COLUMN     "player2eloChange" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "mmr",
ADD COLUMN     "elo" INTEGER NOT NULL DEFAULT 1200;
