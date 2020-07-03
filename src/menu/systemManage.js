/*
 * @Author: Zhang Qing
 * @Date: 2020-07-02 22:02:43
 * @LastEditTime: 2020-07-03 12:27:26
 * @LastEditors: your name
 * @Description: 系统管理
 * @FilePath: \PersonalBlog_Web\src\menu\systemManage.js
 */ 
export default {
  name:"系统管理",
<<<<<<< HEAD
  icon:"el-icon-setting",
=======
  icon:"",
>>>>>>> 9d47891053a73571fde5e3f1a1d707e5c7a0a012
  children:{
    // 修改密码
    modifyPasswordCardList:{
      name:"修改密码",
      icon:"",
      path:"/modifyPassword"
    },
    // 安全退出
    safetyRemoveCardList:{
      name:"安全退出",
      icon:"",
      path:"/login"
    }
  }
}