/*
 * @Author: Zhang Qing
 * @Date: 2020-07-03 20:19:49
 * @LastEditTime: 2020-07-03 20:19:50
 * @LastEditors: your name
 * @Description: 分类数据获取的后端接口配置
 * @FilePath: \PersonalBlog_Web\src\api\modelManage\category.js
 */ 

import request from "@/utils/request.js";

export function categoryList(params) {
  return request({
    url:"",
    methods:"get",
    params:params
  })
}