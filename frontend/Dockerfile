# ── Stage 1: Build ──────────────────────────────────────────────────────────
FROM node:22.14-alpine AS builder

WORKDIR /app

# Copy manifests first – layer cached as long as deps don't change
COPY package*.json ./
RUN npm ci --prefer-offline

# ── Declare build-time env vars (VITE_ vars are baked in at build time) ──
# These must be passed via `--build-arg` or docker-compose `build.args`
ARG VITE_GOOGLE_CLIENT_ID
ARG VITE_AUTH_BASE_URL
ARG VITE_AI_BASE_URL
ARG VITE_GOOGLE_REDIRECT_URL 

# Make them available to Vite during the build
ENV VITE_GOOGLE_CLIENT_ID=$VITE_GOOGLE_CLIENT_ID
ENV VITE_AUTH_BASE_URL=$VITE_AUTH_BASE_URL
ENV VITE_AI_BASE_URL=$VITE_AI_BASE_URL
ENV VITE_GOOGLE_REDIRECT_URL=$VITE_GOOGLE_REDIRECT_URL
COPY . .
RUN npm run build

# ── Stage 2: Serve ──────────────────────────────────────────────────────────
FROM nginx:stable-alpine AS runner

# Copy only the built static files from the builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Optional: custom nginx config to fix SPA routing (history API)
RUN printf 'server {\n  listen 80;\n  root /usr/share/nginx/html;\n  index index.html;\n  location / {\n    try_files $uri $uri/ /index.html;\n  }\n}\n' > /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
