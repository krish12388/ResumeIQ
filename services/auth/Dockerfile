FROM node:22.14-alpine

WORKDIR /app

# Copy manifests first – layer cached as long as deps don't change
COPY package*.json ./

# Install only production dependencies (excludes nodemon, test tools, etc.)
RUN npm ci --omit=dev --prefer-offline

COPY . .

# Run as a non-root user for security
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

ENV NODE_ENV=production
ENV PORT=3001

EXPOSE 3001

CMD ["node", "index.js"]
