
import request from "@/utils/request.js";

/**
 * 登录
 * @param params
 * @returns {AxiosPromise}
 */
export function login(params) {
  return request({
    // closeLoading: true,
    // closeInterceptors: true,
    url: "/admin/login",
    method: "post",
    data: params //注意：如果是get请求请使用 params: params
  });
}

// 验证码
export function captcha(params){
  return request({
    url:"/admin/captcha",
    method:"get",
    params:params
  });
}