# 基础镜像（Node.js 14，Alpine 系统体积小）
FROM node:20-alpine

# 创建工作目录
WORKDIR /app

# 复制 package.json 和 package-lock.json（先复制依赖文件，利用 Docker 缓存）
COPY package*.json ./

# 安装依赖
RUN npm install --production

# 复制项目代码
COPY . .

# 暴露端口（后端运行在 3000 端口）
EXPOSE 3000

# 启动命令
CMD ["node", "server.js"]