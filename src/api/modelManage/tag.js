
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
