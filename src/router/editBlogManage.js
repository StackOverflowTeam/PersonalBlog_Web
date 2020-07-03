/*
 * @Author: Zhang Qing
 * @Date: 2020-07-03 09:02:35
 * @LastEditTime: 2020-07-03 10:52:40
 * @LastEditors: your name
 * @Description: 编写博客对应路由配置
 * @FilePath: \PersonalBlog_Web\src\router\editBlogManage.js
 */
import Layout from "@/views/layout/App.vue";
export default {
  path: '/editBlog',
  component: Layout,
  name: 'EditBlogManage',
  redirect: '/editBlog',     //这个要对应menu里的path
  meta: {
    title: '发布博客'
  }
};