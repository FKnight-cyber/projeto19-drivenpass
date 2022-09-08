-- CreateTable
CREATE TABLE "cards" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "number" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "securityCode" VARCHAR(4) NOT NULL,
    "expirationDate" VARCHAR(5) NOT NULL,
    "isVirtual" BOOLEAN,
    "password" TEXT NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "cards_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "cards" ADD CONSTRAINT "cards_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
