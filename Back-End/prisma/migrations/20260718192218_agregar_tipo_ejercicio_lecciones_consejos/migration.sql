-- CreateEnum
CREATE TYPE "TipoEjercicio" AS ENUM ('opcion_multiple', 'numerico');

-- AlterTable
ALTER TABLE "Escenario" ADD COLUMN     "imagenUrl" TEXT,
ADD COLUMN     "respuestaCorrecta" TEXT,
ADD COLUMN     "tipo" "TipoEjercicio" NOT NULL DEFAULT 'opcion_multiple';

-- AlterTable
ALTER TABLE "Opcion" ADD COLUMN     "esCorrecta" BOOLEAN NOT NULL DEFAULT false;

-- CreateTable
CREATE TABLE "Leccion" (
    "id" SERIAL NOT NULL,
    "seccionId" INTEGER NOT NULL,
    "titulo" TEXT NOT NULL,
    "videoUrl" TEXT NOT NULL,
    "orden" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Leccion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Consejo" (
    "id" SERIAL NOT NULL,
    "descripcion" TEXT NOT NULL,
    "activo" BOOLEAN NOT NULL DEFAULT true,
    "escenarioId" INTEGER NOT NULL,

    CONSTRAINT "Consejo_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Leccion" ADD CONSTRAINT "Leccion_seccionId_fkey" FOREIGN KEY ("seccionId") REFERENCES "Seccion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Consejo" ADD CONSTRAINT "Consejo_escenarioId_fkey" FOREIGN KEY ("escenarioId") REFERENCES "Escenario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
