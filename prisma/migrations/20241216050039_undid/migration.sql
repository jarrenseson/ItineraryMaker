/*
  Warnings:

  - Made the column `location` on table `Event` required. This step will fail if there are existing NULL values in that column.
  - Made the column `description` on table `Event` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Event" ALTER COLUMN "location" SET NOT NULL,
ALTER COLUMN "description" SET NOT NULL;
