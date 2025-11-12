# 阶段 1：构建 Vue 项目（多阶段构建，减小最终镜像体积）
FROM node:20-alpine AS build-stage

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# 1. 定义一个构建参数 (ARG)
#    这个参数会在构建镜像时从外部接收值
ARG VUE_APP_API_BASE_URL

# 2. 将构建参数设置为环境变量 (ENV)
#    这样，当运行 npm run build 时，process.env.VUE_APP_API_BASE_URL 就有值了
ENV VUE_APP_API_BASE_URL=$VUE_APP_API_BASE_URL

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