FROM node:18-alpine AS base

# Fase 1: Pruning (Seleccionar solo lo necesario para el backend)
FROM base AS builder
RUN apk add --no-cache libc6-compat
WORKDIR /app
RUN npm install turbo --global
COPY . .
# Genera una carpeta "out" con solo lo necesario para "backend"
RUN turbo prune --scope=backend --docker

# Fase 2: Instalación de Dependencias (Usando el lockfile podado)
FROM base AS installer
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Copiar configuración de dependencias desde Fase 1
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/package-lock.json ./package-lock.json

# Instalar dependencias
RUN npm install

# Copiar el código fuente podado
COPY --from=builder /app/out/full/ .

# Construir el proyecto (backend + paquetes compartidos)
RUN npx turbo run build --filter=backend...

# Fase 3: Runner (Imagen final ligera)
FROM base AS runner
WORKDIR /app

# Crear usuario no-root por seguridad
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nestjs
USER nestjs

COPY --from=installer /app .

# Exponer puerto (Cloud Run inyecta PORT env var, NestJS debe leerlo)
EXPOSE 3000

CMD ["node", "apps/backend/dist/main.js"]
