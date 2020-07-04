/*
 * @Author: Zhang Qing
 * @Date: 2020-07-02 21:56:40
 * @LastEditTime: 2020-07-04 21:33:01
 * @LastEditors: your name
 * @Description: 管理模块
 * @FilePath: \PersonalBlog_Web\src\menu\modelManage.js
 */ 
export default {
  name:"管理模块",
  icon:"el-icon-s-operation",
  children:{
    // path 对应网页端的Uri连接
    blogCardList:{
      name:"文章管理",
      icon:"el-icon-tickets",
      path:"/model_manage/blog_manage"
    },
    commentCardList:{
      name:"评论管理",
      icon:"fa fa-commenting",
      path:"/model_manage/comment_manage"
    },
    categoryCardList:{
      name:"分类管理",
      icon:"fa fa-bars",
      path:"/model_manage/category_manage"
    },
    tagCardList:{
      name:"标签管理",
      icon:"fa fa-tags",
      path:"/model_manage/tag_manage"
    },
    tagRelationCardList:{
      name:"友情链接",
      icon:"el-icon-link",  
      path:"/model_manage/tagRelation_manage"
    }
  }
};