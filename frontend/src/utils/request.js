import axios from 'axios';

// 1. 创建 axios 实例，并配置基础 URL
const apiClient = axios.create({
    // 从环境变量中获取基础 URL
    baseURL: process.env.VUE_APP_API_BASE_URL, // 如果你使用 Vite
    // baseURL: process.env.VUE_APP_API_BASE_URL, // 如果你使用 Vue CLI
    timeout: 10000, // 请求超时时间
});

// 2. 封装 GET 请求
export const get = (url, params = {}) => {
    return apiClient.get(url, { params });
};

// 3. 封装 POST 请求
export const post = (url, data = {}) => {
    return apiClient.post(url, data);
};

// 你可以根据需要，继续封装 put, delete 等方法
export const put = (url, data = {}) => {
    return apiClient.put(url, data);
};

export const del = (url) => {
    return apiClient.delete(url);
};

// 4. 导出整个实例（如果你需要在某些地方使用原始的 axios 方法）
export default apiClient;