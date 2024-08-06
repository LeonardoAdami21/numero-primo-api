-- CreateTable
CREATE TABLE "NmeroPrimo" (
    "id" TEXT NOT NULL,
    "numero" INTEGER NOT NULL,
    "resultado" INTEGER[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "NmeroPrimo_pkey" PRIMARY KEY ("id")
);
