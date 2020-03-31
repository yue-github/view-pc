import axios from 'axios'
import store from '@/store'

// axios.defaults.headers.post["Content-type"]="application/json"
// 创建axios实例
let baseURL='';

 // baseURL='';//不用mock时注释掉

 axios.defaults.withCredentials=true;
const service = axios.create({
  baseURL: baseURL, // api 的 base_url
  timeout: 8000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(
  config => {
    if (store.getters.token) {
      config.headers.Authorization = 'Bearer '+store.getters.token;
      // config.headers['X-Token'] = 'Bearer '+ getToken('just')// 让每个请求携带自定义token 请根据实际情况自行修改
    }
    return config
  },
  error => {
    // Do something with request error
    Promise.reject(error)
  }
)

// response 拦截器
service.interceptors.response.use(
  response => {
       return response.data
  }
)

export default service
