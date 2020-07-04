/*
 * @Author: Zhang Qing
 * @Date: 2020-07-03 20:28:07
 * @LastEditTime: 2020-07-04 23:40:07
 * @LastEditors: your name
 * @Description: 标签相关的后端接口
 * @FilePath: \PersonalBlog_Web\src\api\modelManage\tag.js
 */

import request from "@/utils/request.js";

export function tagList(params) {
  return request({
    url: "/tags/list",
    method: "get",
    params: params
  })
}

export function tagCount(params) {
  return request({
    url: "/tags/count",
    method: "post",
    data: params
  })
}
export function tagSave(params) {
  return request({
    url: "/tags/save",
    method: "post",
    data: params
  })
}

export function tagDelete(params) {
  return request({
    url: "/tags/delete",
    method: "post",
    data: params
  })
}
