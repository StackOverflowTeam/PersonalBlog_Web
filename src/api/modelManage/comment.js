/*
 * @Author: Zhang Qing
 * @Date: 2020-07-03 20:17:25
 * @LastEditTime: 2020-07-04 21:03:53
 * @LastEditors: your name
 * @Description: 评论的接口配置
 * @FilePath: \PersonalBlog_Web\src\api\modelManage\comment.js
 */ 
import request from "@/utils/request.js";

export function commentList(params) {
  return request({
    url:"/comments/list",
    methods:"get",
    params:params
  })
}

export function commentCount(params){
  return request({
    url:'/comments/count',
    methods:'post',
    data:params
  })
}

export function commentCheckDone(params){
  return request({
    url:'/comments/checkDone',
    methods:'post',
    data:params
  })
}

export function commentReply(params){
  return request({
    url:'/comments/reply',
    methods:'post',
    data:params
  })
}

export function commentDelete(params){
  return request({
    url:'/comments/delete',
    methods:'post',
    data:params
  })
}