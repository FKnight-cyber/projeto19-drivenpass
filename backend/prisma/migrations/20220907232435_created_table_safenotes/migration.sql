-- CreateTable
CREATE TABLE "safenotes" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(50) NOT NULL,
    "description" VARCHAR(1000) NOT NULL,

    CONSTRAINT "safenotes_pkey" PRIMARY KEY ("id")
);
