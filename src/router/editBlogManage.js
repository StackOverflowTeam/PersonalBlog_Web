/*
 * @Author: Zhang Qing
 * @Date: 2020-07-03 09:02:35
<<<<<<< HEAD
 * @LastEditTime: 2020-07-03 10:52:40
=======
 * @LastEditTime: 2020-07-03 22:00:56
>>>>>>> 9d47891053a73571fde5e3f1a1d707e5c7a0a012
 * @LastEditors: your name
 * @Description: 编写博客对应路由配置
 * @FilePath: \PersonalBlog_Web\src\router\editBlogManage.js
 */
import Layout from "@/views/layout/App.vue";
<<<<<<< HEAD
=======

>>>>>>> 9d47891053a73571fde5e3f1a1d707e5c7a0a012
export default {
  path: '/editBlog',
  component: Layout,
  name: 'EditBlogManage',
  redirect: '/editBlog',     //这个要对应menu里的path
  meta: {
    title: '发布博客'
<<<<<<< HEAD
  }
=======
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
>>>>>>> 9d47891053a73571fde5e3f1a1d707e5c7a0a012
};