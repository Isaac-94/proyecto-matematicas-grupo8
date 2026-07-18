-- CreateEnum
CREATE TYPE "Rol" AS ENUM ('usuario', 'admin', 'superadmin');

-- CreateTable
CREATE TABLE "Usuario" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "nombre" TEXT,
    "puntos" INTEGER NOT NULL DEFAULT 0,
    "tokens" INTEGER NOT NULL DEFAULT 0,
    "rol" "Rol" NOT NULL DEFAULT 'usuario',
    "password" TEXT,
    "edad" TEXT,
    "genero" TEXT,
    "lugar" TEXT,
    "desafio" TEXT,
    "sentimiento" TEXT,
    "racha" INTEGER NOT NULL DEFAULT 0,
    "ultimaConexion" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Auditoria" (
    "id" SERIAL NOT NULL,
    "usuarioId" TEXT NOT NULL,
    "accion" TEXT NOT NULL,
    "entidad" TEXT NOT NULL,
    "entidadId" TEXT,
    "detalles" JSONB,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Auditoria_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Seccion" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "grado" INTEGER NOT NULL DEFAULT 1,
    "puntosRequeridos" INTEGER NOT NULL DEFAULT 0,
    "puntosRecompensa" INTEGER NOT NULL DEFAULT 0,
    "umbralAprobacion" DOUBLE PRECISION NOT NULL DEFAULT 0.66,

    CONSTRAINT "Seccion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SeccionAprobada" (
    "usuarioId" TEXT NOT NULL,
    "seccionId" INTEGER NOT NULL,

    CONSTRAINT "SeccionAprobada_pkey" PRIMARY KEY ("usuarioId","seccionId")
);

-- CreateTable
CREATE TABLE "Escenario" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "pregunta" TEXT NOT NULL,
    "explicacion" TEXT,
    "categoria" TEXT NOT NULL,
    "seccionId" INTEGER NOT NULL,

    CONSTRAINT "Escenario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Opcion" (
    "id" SERIAL NOT NULL,
    "texto" TEXT NOT NULL,
    "puntos" INTEGER NOT NULL DEFAULT 0,
    "escenarioId" INTEGER NOT NULL,

    CONSTRAINT "Opcion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Recurso" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "valor" INTEGER NOT NULL DEFAULT 1,
    "usuarioId" TEXT NOT NULL,
    "seccionId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Recurso_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Insignia" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "imagenUrl" TEXT,
    "puntosRequeridos" INTEGER NOT NULL DEFAULT 0,
    "escenarioId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Insignia_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Progreso" (
    "id" SERIAL NOT NULL,
    "usuarioId" TEXT NOT NULL,
    "escenarioId" INTEGER NOT NULL,
    "puntosObtenidos" INTEGER NOT NULL DEFAULT 0,
    "resuelto" BOOLEAN NOT NULL DEFAULT false,
    "intentosFallidos" INTEGER NOT NULL DEFAULT 0,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Progreso_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_InsigniaToUsuario" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_InsigniaToUsuario_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Recurso_seccionId_key" ON "Recurso"("seccionId");

-- CreateIndex
CREATE INDEX "_InsigniaToUsuario_B_index" ON "_InsigniaToUsuario"("B");

-- AddForeignKey
ALTER TABLE "Auditoria" ADD CONSTRAINT "Auditoria_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SeccionAprobada" ADD CONSTRAINT "SeccionAprobada_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SeccionAprobada" ADD CONSTRAINT "SeccionAprobada_seccionId_fkey" FOREIGN KEY ("seccionId") REFERENCES "Seccion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Escenario" ADD CONSTRAINT "Escenario_seccionId_fkey" FOREIGN KEY ("seccionId") REFERENCES "Seccion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Opcion" ADD CONSTRAINT "Opcion_escenarioId_fkey" FOREIGN KEY ("escenarioId") REFERENCES "Escenario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Recurso" ADD CONSTRAINT "Recurso_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Recurso" ADD CONSTRAINT "Recurso_seccionId_fkey" FOREIGN KEY ("seccionId") REFERENCES "Seccion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Insignia" ADD CONSTRAINT "Insignia_escenarioId_fkey" FOREIGN KEY ("escenarioId") REFERENCES "Escenario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Progreso" ADD CONSTRAINT "Progreso_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Progreso" ADD CONSTRAINT "Progreso_escenarioId_fkey" FOREIGN KEY ("escenarioId") REFERENCES "Escenario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_InsigniaToUsuario" ADD CONSTRAINT "_InsigniaToUsuario_A_fkey" FOREIGN KEY ("A") REFERENCES "Insignia"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_InsigniaToUsuario" ADD CONSTRAINT "_InsigniaToUsuario_B_fkey" FOREIGN KEY ("B") REFERENCES "Usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;
