/*
 * @Author: Zhang Qing
 * @Date: 2020-07-03 09:06:16
 * @LastEditTime: 2020-07-03 11:27:39
 * @LastEditors: your name
 * @Description: 系统管理路由配置
 * @FilePath: \PersonalBlog_Web\src\router\systemManage.js
 */ 
import Layout from "@/views/layout/App.vue";
export default {
  path: '/',
  component: Layout,
  name: 'SystemManage',
  redirect: '/',     //这个要对应menu里的path
  meta: {
    title: '系统管理'
  },
  children: [
    {
      path: '/modifyPassword',
      name: 'ModifyPassword',
      meta: {
        title: '修改密码'
      },
      component: resolve => require(["@/views/systemManage/ModifyPassword.vue"],resolve)
      // require里的路径是页面的路径
    }
  ]
}