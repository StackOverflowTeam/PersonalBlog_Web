import request from "@/utils/request.js";

//获取整体信息
export function categoryList(params) {
  return request({
    url: "/categories/list",
    methods: "get",
    params: params
  });
}
//获取数量    有点问题
export function categoryCount(params) {
  return request({
    url: "/categories/count",
    methods: "post",
    data: params
  });
}
//保存
export function categorySave(params) {
  console.log("参数" + params);
  return request({
    url: "/categories/save",
    methods: "post",
    data: params
  });
}
//更新
export function categoryUpdate(params) {
  return request({
    url: "/categories/update",
    methods: "post",
    data: params
  });
}
//删
export function categoryDelte(params) {
  // 后端采用RequestBody注解 将参数转成json格式
  console.log("参数" + JSON.stringify(params));
  return request({
    url: "/categories/delete",
    method: "post",
    // data: JSON.stringify(params)
    data:params
  });
}