/*
 * @Author: Zhang Qing
 * @Date: 2020-07-03 20:28:07
 * @LastEditTime: 2020-07-03 20:30:42
 * @LastEditors: your name
 * @Description: 标签相关的后端接口
 * @FilePath: \PersonalBlog_Web\src\api\modelManage\tag.js
 */ 

import request from "@/utils/request.js";

export function tagList(params) {
  return request({
    url:"",
    method:"get",
    params:params
  })
}