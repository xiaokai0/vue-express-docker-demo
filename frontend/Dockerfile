# 阶段 1：构建 Vue 项目（多阶段构建，减小最终镜像体积）
FROM node:20-alpine AS build-stage

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

RUN ls -l

# 阶段 2：用 Nginx 托管静态文件
FROM nginx:alpine AS production-stage

# 把构建好的静态文件复制到 Nginx 的默认目录
COPY --from=build-stage /app/dist /usr/share/nginx/html

RUN ls -l

# 暴露 80 端口（Nginx 默认端口）
EXPOSE 80

# 启动 Nginx（前台运行）
CMD ["nginx", "-g", "daemon off;"]