/*
 * @Author: Zhang Qing
 * @Date: 2020-07-03 09:02:35
 * @LastEditTime: 2020-07-03 09:02:35
 * @LastEditors: your name
 * @Description: 编写博客对应路由配置
 * @FilePath: \PersonalBlog_Web\src\router\editBlogManage.js
 */
import Layout from "@/views/layout/App.vue";
export default {
  path: '',
  component: Layout,
  name: '',
  redirect: '',     //这个要对应menu里的path
  meta: {
    title: ''
  },
  children: [
    {
      path: '',
      name: '',
      meta: {
        title: ''
      },
      component: resolve => require([""],resolve)
      // require里的路径是页面的路径
    }
  ]
};