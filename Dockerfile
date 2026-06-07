# ---------- Build stage ----------
FROM node:22-alpine AS build
WORKDIR /app

# Install dependencies.
# Note: npm install (not npm ci) is used on purpose — Tailwind v4 pulls in
# platform-specific native deps (lightningcss / @tailwindcss/oxide) whose
# Linux optional packages may be absent from a lockfile generated on another
# OS, which would make `npm ci` fail. npm install resolves the correct
# per-platform binaries for the build image.
COPY package.json package-lock.json ./
RUN npm install --no-audit --no-fund

# Build the static site
COPY . .
RUN npm run build

# ---------- Runtime stage ----------
FROM nginx:1.27-alpine AS runtime

# Static-site friendly nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the generated static output
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

# Lightweight container healthcheck
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget -qO- http://127.0.0.1/ >/dev/null 2>&1 || exit 1

CMD ["nginx", "-g", "daemon off;"]
