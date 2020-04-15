import axios from 'axios';

let base = '';

export const requestLogin = params => { return axios.post(`${base}/login`, params).then(res => res.data); };

export const getUserList = params => { return axios.get(`${base}/user/list`, { params: params }); };

export const getUserListPage = params => { return axios.get(`${base}/user/listpage`, { params: params }); };

export const removeUser = params => { return axios.get(`${base}/user/remove`, { params: params }); };

export const batchRemoveUser = params => { return axios.get(`${base}/user/batchremove`, { params: params }); };

export const editUser = params => { return axios.get(`${base}/user/edit`, { params: params }); };

export const addUser = params => { return axios.get(`${base}/user/add`, { params: params }); };

export function request(config){
  const instance=axios.create({
    baseURL:'',
    timeout:5000
  })
  //axios拦截器(请求拦截)
  instance.interceptors.request.use(config=>{
    // console.log(config)
    return config;
  },err=>{
    console.log(err)
  })
  //axios拦截器(响应拦截)
  instance.interceptors.response.use(res=>{
    // console.log(res)
    return res.data;
  },err=>{
    console.log(err)
  });

  return instance(config)
}
