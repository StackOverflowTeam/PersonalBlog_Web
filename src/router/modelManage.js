/*
 * @Author: Zhang Qing
 * @Date: 2020-07-03 09:04:57
 * @LastEditTime: 2020-07-03 11:28:01
 * @LastEditors: your name
 * @Description: 模块管理路由配置
 * @FilePath: \PersonalBlog_Web\src\router\modelManage.js
 */ 
import Layout from "@/views/layout/App.vue";
export default {
  path: '/model_manage',
  component: Layout,
  name: 'ModelManage',
  redirect: '/model_manage',     //这个要对应menu里的path
  meta: {
    title: '模块管理'
  },
  children: [
    {
      path: '/model_manage/blog_manage',
      name: 'BlogManage',
      meta: {
        title: '博客管理'
      },
      component: resolve => require(["@/views/modelManage/BlogManage.vue"],resolve)
      // require里的路径是页面的路径
    },
    {
      path: '/model_manage/comment_manage',
      name: 'CommentManage',
      meta: {
        title: '评论管理'
      },
      component: resolve => require(["@/views/modelManage/BlogManage.vue"],resolve)
      // require里的路径是页面的路径
    },
    {
      path: '/model_manage/category_manage',
      name: 'CategoryManage',
      meta: {
        title: '分类管理'
      },
      component: resolve => require(["@/views/modelManage/CategoryManage.vue"],resolve)
      // require里的路径是页面的路径
    },
    {
      path: '/model_manage/tag_manage',
      name: 'TagManage',
      meta: {
        title: '标签管理'
      },
      component: resolve => require(["@/views/modelManage/TagManage.vue"],resolve)
      // require里的路径是页面的路径
    },
    {
      path: '/model_manage/tagRelation_manage',
      name: 'TagRelationManage',
      meta: {
        title: '友情链接'
      },
      component: resolve => require(["@/views/modelManage/TagRelation.vue"],resolve)
      // require里的路径是页面的路径
    }
  ]
}