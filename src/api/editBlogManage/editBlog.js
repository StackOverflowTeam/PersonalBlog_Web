/*
 * @Author: Zhang Qing
 * @Date: 2020-07-03 20:04:41
 * @LastEditTime: 2020-07-03 20:08:49
 * @LastEditors: your name
 * @Description: 发布博客的接口
 * @FilePath: \PersonalBlog_Web\src\api\editBlogManage\editBlog.js
 */ 
import request from "@/utils/request.js";

export function name(params) {
  return request({
    // 待完善
    url:"",
    method:"",
    params:params //注意：如果是post请求请使用 data: params
  })
}