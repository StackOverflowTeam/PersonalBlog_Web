/*
 * @Author: Zhang Qing
 * @Date: 2020-07-02 22:02:43
 * @LastEditTime: 2020-07-05 16:36:59
 * @LastEditors: your name
 * @Description: 系统管理
 * @FilePath: \PersonalBlog_Web\src\menu\systemManage.js
 */ 
export default {
  name:"系统管理",
  icon:"el-icon-setting",
  children:{
    // 修改密码
    modifyPasswordCardList:{
      name:"修改密码",
      icon:"fa fa-edit",
      path:"/modifyPassword"
    },
    // 安全退出
    safetyRemoveCardList:{
      name:"安全退出",
      icon:"fa fa-power-off",
      path:"/login" ////浏览器显示的uri
    }
  }
}