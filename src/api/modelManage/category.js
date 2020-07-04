/*
 * @Author: Zhang Qing
 * @Date: 2020-07-03 20:19:49
 * @LastEditTime: 2020-07-04 23:39:57
 * @LastEditors: your name
 * @Description: 分类数据获取的后端接口配置
 * @FilePath: \PersonalBlog_Web\src\api\modelManage\category.js
 */

import request from "@/utils/request.js";

//获取整体信息
export function categoryList(params) {
  return request({
    url: "/categories/list",
    methods: "get",
    params: params
  })
}
//获取数量
export function categoryCount(params) {
  return request({
    url: "/categories/count",
    methods: "post",
    data: params
  })
}
//保存
export function categorySave(params) {
  return request({
    url: "/categories/save",
    methods: "post",
    data: params
  })
}
//更新
export function categoryUpdate(params) {
  return request({
    url: "/categories/update",
    methods: "post",
    data: params
  })
}
//删
export function categoryDelte(params) {
  return request({
    url: "/categories/deldete",
    methods: "post",
    data: params
  })
}