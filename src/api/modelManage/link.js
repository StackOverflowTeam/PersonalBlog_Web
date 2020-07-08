import request from "@/utils/request.js";

export function linkList(params) {
  return request({
    url: "/links/list",
    method: "get",
    params: params
  });
}

export function linkCount(params) {
  return request({
    url: "/links/count",
    method: "post",
    data: params
  });
}

export function linkUpdate(params) {
  return request({
    url: "/links/update",
    method: "post",
    data: params
  });
}

export function linkDelete(params) {
  console.log(params);
  return request({
    url: "/links/updateStatus",
    method: "post",
    data: params
  });
}

export function linkInfo(params) {
  return request({
    url: "/links/info",
    method: "get",
    params: params
  });
}

export function linkSave(params){
  console.log(params);
  return request({
    url:"/links/linkSave",
    method:'post',
    data:params
  })
}