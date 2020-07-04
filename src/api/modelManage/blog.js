/*
 * @Author: Zhang Qing
 * @Date: 2020-07-03 20:12:03
 * @LastEditTime: 2020-07-04 23:40:17
 * @LastEditors: your name
 * @Description: 查看blog相关的接口 不涉及写博客
 * @FilePath: \PersonalBlog_Web\src\api\modelManage\blog.js
 */

import request from "@/utils/request.js";

export function bloglist(params) {
  return request({
    url: "/blogs/list",
    method: "get",
    params: params
  })
}
/**
 * @description: 获取博客数量
 * @param {type} 
 * @return: 
 * 
 */
export function blogCount(params) {
  return request({
    url: "/blogs/count",//后端的接口
    method: "post",
    data: params
  })
}

export function blogSave(params) {
  return request({
    url: "/blogs/save",
    method: "post",
    data: params
  })
}