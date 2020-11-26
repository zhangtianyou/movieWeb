import axio from 'axios';
import qs from 'querystring'


const service = axio.create({
  baseURL: process.env.BASE_API,
  timeout: 5000
});

service.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    console.log( error );
    return Promise.reject( error );
  }
);

// service.interceptors.response.use(
//   response => {
//     const res = response.data;
//     return res;
//   },
//   error => {
//     console.log( 'response error:' + error );
//     return Promise.reject( error );
//   }
// );

export default service;

export const postRequestBody = ( url, params ) => {
  
  return axio({
    method: 'post',
    url: url,
    data: params,
    headers: {
      'Authorization': window.localStorage['MesToken'],
       'Content-Type': 'application/json'
    }
  })
}

export const postRequestBuffer = ( url, params ) => {
  
  return axio({
    method: 'post',
    url: url,
    data: params,
    transformRequest: [ function (data) {
      data = qs.stringify( data );
      return data;
    }],
    headers: {
      'Authorization': window.localStorage['MesToken'],
       'Content-Type': 'application/x-www-form-urlencoded'
    },
    responseType:'arraybuffer'
  })
}
export const postRequestFile = (url, params) => {//上传头像
  return axio({
    method: 'post',
    url: url,
    data: params,
    headers: {
      'Authorization': window.localStorage['MesToken'],
      'Content-Type': 'multipart/form-data'
    }
  })
}

export const postRequest = (url, params) => {
  return axio({
    method: 'post',
    url: url,
    data: params,
    transformRequest: [ function (data) {
      data = qs.stringify( data );
      
      return data;
    }],
    headers: {
      'Authorization': window.localStorage['MesToken'],
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  });
}
export const getRequestForm = (url, params) => {
  return axio({
    method: 'get',
    url: url,
    data: params,
    headers: {
      'Authorization': window.localStorage['MesToken'],
      'Content-Type': 'application/x-www-form-urlencoded',
    }
  });
}

export const getRequest = (url, params) => {
  return axio({
    method: 'get',
    url: url,
    params: params,
    headers: {
       'Content-Type': 'application/x-www-form-urlencoded',
       'Authorization': window.localStorage['MesToken']
    }
  })
}