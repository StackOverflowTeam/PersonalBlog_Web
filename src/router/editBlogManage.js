/*
 * @Author: Zhang Qing
 * @Date: 2020-07-03 09:02:35
 * @LastEditTime: 2020-07-04 09:22:28
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
  },
  children:[
    {
      path:"/editBlog",
      name:"",
      meta:{
        title:"新的感想"
      },
      // component:resolve => require(["@/views/articleManage/articleList/WritBlog.vue"], resolve)
      component:resolve => require(["@/views/editBlogManage/EditBlog.vue"], resolve)
    }
  ]
};