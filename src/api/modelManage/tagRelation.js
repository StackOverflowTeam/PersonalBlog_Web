/*
 * @Author: Zhang Qing
 * @Date: 2020-07-03 20:31:11
 * @LastEditTime: 2020-07-04 23:24:10
 * @LastEditors: your name
 * @Description: 友情链接链接后端接口文件
 * @FilePath: \PersonalBlog_Web\src\api\modelManage\tagRelation.js
 */
import request from "@/utils/request.js";

export function linkList(params) {
  return request({
    url: "/links/list",
    method: "get",
    params: params
  })
}

export function linkCount(params) {
  return request({
    url: "/links/count",
    method: "post",
    data: params
  })
}

export function linkUpdate(params) {
  return request({
    url: "/links/update",
    method: "post",
    data: params
  })
}

export function linkDelete(params) {
  return request({
    url: "/links/delete",
    method: "post",
    data: params
  })
}

export function linkInfo(params) {
  return request({
    url: "/links/info",
    method: "get",
    params: params
  })
}