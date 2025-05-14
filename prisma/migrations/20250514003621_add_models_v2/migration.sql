/*
  Warnings:

  - You are about to drop the column `player1eloChange` on the `MatchV2` table. All the data in the column will be lost.
  - You are about to drop the column `player2eloChange` on the `MatchV2` table. All the data in the column will be lost.
  - You are about to drop the column `volatility` on the `UserV2` table. All the data in the column will be lost.
  - Added the required column `player1RatingAfter` to the `MatchV2` table without a default value. This is not possible if the table is not empty.
  - Added the required column `player1RatingBefore` to the `MatchV2` table without a default value. This is not possible if the table is not empty.
  - Added the required column `player1RdAfter` to the `MatchV2` table without a default value. This is not possible if the table is not empty.
  - Added the required column `player1RdBefore` to the `MatchV2` table without a default value. This is not possible if the table is not empty.
  - Added the required column `player2RatingAfter` to the `MatchV2` table without a default value. This is not possible if the table is not empty.
  - Added the required column `player2RatingBefore` to the `MatchV2` table without a default value. This is not possible if the table is not empty.
  - Added the required column `player2RdAfter` to the `MatchV2` table without a default value. This is not possible if the table is not empty.
  - Added the required column `player2RdBefore` to the `MatchV2` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "MatchV2" DROP COLUMN "player1eloChange",
DROP COLUMN "player2eloChange",
ADD COLUMN     "player1RatingAfter" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "player1RatingBefore" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "player1RdAfter" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "player1RdBefore" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "player2RatingAfter" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "player2RatingBefore" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "player2RdAfter" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "player2RdBefore" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "UserV2" DROP COLUMN "volatility",
ALTER COLUMN "rating" SET DEFAULT 1500.0,
ALTER COLUMN "rd" SET DEFAULT 350.0;
