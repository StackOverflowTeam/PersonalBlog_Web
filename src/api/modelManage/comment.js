/*
 * @Author: Zhang Qing
 * @Date: 2020-07-03 20:17:25
 * @LastEditTime: 2020-07-03 20:18:55
 * @LastEditors: your name
 * @Description: 评论的接口配置
 * @FilePath: \PersonalBlog_Web\src\api\modelManage\comment\comment.js
 */ 
import request from "@/utils/request.js";

export function commentList(params) {
  return request({
    url:"",
    methods:"get",
    params:params
  })
}