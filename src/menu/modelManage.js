/*
 * @Author: Zhang Qing
 * @Date: 2020-07-02 21:56:40
 * @LastEditTime: 2020-07-02 23:03:22
 * @LastEditors: your name
 * @Description: 管理模块
 * @FilePath: \PersonalBlog_Web\src\menu\modelManage.js
 */ 
export default {
  name:"管理模块",
  icon:"",
  children:{
    // 博客管理
    // path 对应网页端的Uri连接
    blogCardList:{
      name:"博客管理",
      icon:"",
      path:"/model_manage/blogList"
    },
    // 评论管理
    commentCardList:{
      name:"评论管理",
      icon:"",
      path:"/model_manage/commentList"
    },
    // 分类管理
    categoryCardList:{
      name:"分类管理",
      icon:"",
      path:"/model_manage/categoryList"
    },
    // 标签管理
    tagCardList:{
      name:"标签管理",
      icon:"",
      path:"/model_manage/tagList"
    },
    // 友情链接
    tagRelationCardList:{
      name:"友情链接",
      icon:"",  
      path:"/model_manage/tagRelationList"
    }
  }
};