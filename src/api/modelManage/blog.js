/*
 * @Author: Zhang Qing
 * @Date: 2020-07-03 20:12:03
 * @LastEditTime: 2020-07-03 20:16:57
 * @LastEditors: your name
 * @Description: 查看blog相关的接口 不涉及写博客
 * @FilePath: \PersonalBlog_Web\src\api\modelManage\blog\blog.js
 */ 

import request from "@/utils/request.js";

export function bloglist(params) {
  return request({
    url:"",
    method:"get",
    params:params
  })
}
/**
 * @description: 获取博客数量
 * @param {type} 
 * @return: 
 * 好像有点多余可以根据返货blog的json格式去取得数量
 * 所以暂时不写
 */
export function getBlogNum(params) {
  return request({
    url:"",//后端的接口
    method:"",
    params:params
  })
}