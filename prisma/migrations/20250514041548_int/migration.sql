/*
  Warnings:

  - You are about to alter the column `player1RatingAfter` on the `MatchV2` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `player1RatingBefore` on the `MatchV2` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `player2RatingAfter` on the `MatchV2` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `player2RatingBefore` on the `MatchV2` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `rating` on the `UserV2` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.

*/
-- AlterTable
ALTER TABLE "MatchV2" ALTER COLUMN "player1RatingAfter" SET DATA TYPE INTEGER,
ALTER COLUMN "player1RatingBefore" SET DATA TYPE INTEGER,
ALTER COLUMN "player2RatingAfter" SET DATA TYPE INTEGER,
ALTER COLUMN "player2RatingBefore" SET DATA TYPE INTEGER;

-- AlterTable
ALTER TABLE "UserV2" ALTER COLUMN "rating" SET DEFAULT 1500,
ALTER COLUMN "rating" SET DATA TYPE INTEGER;
