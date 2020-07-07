/*
 * @Author: Zhang Qing
 * @Date: 2020-07-03 20:28:07
 * @LastEditTime: 2020-07-07 11:00:06
 * @LastEditors: your name
 * @Description: 标签相关的后端接口
 * @FilePath: \PersonalBlog_Web\src\api\modelManage\tag.js
 */

import request from "@/utils/request.js";
import Qs from "qs";

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
  console.log("json ->" + JSON.stringify(params));
  console.log(Qs.stringify(params));
  console.log(params);
  return request({
    url: "/tags/saveTag",
    method: "post",
    data: params
    // data: Qs.stringify(params)
  })
}

export function tagDelete(params) {
  // console.log("json ->" + JSON.stringify(params));
  // console.log(Qs.stringify(params));
  console.log(params);
  return request({
    url: "/tags/updateStatus",
    // contentType : 'application/json',
    method: "post",
    data: params
    // data: JSON.stringify(params)
  })
}
