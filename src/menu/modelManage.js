/*
 * @Author: Zhang Qing
 * @Date: 2020-07-02 21:56:40
 * @LastEditTime: 2020-07-03 08:11:57
 * @LastEditors: your name
 * @Description: 管理模块
 * @FilePath: \PersonalBlog_Web\src\menu\modelManage.js
 */ 
export default {
  name:"管理模块",
<<<<<<< HEAD
  icon:"el-icon-s-operation",
=======
  icon:"",
>>>>>>> 9d47891053a73571fde5e3f1a1d707e5c7a0a012
  children:{
    // path 对应网页端的Uri连接
    blogCardList:{
      name:"博客管理",
      icon:"",
      path:"/model_manage/blog_manage"
    },
    commentCardList:{
      name:"评论管理",
      icon:"",
      path:"/model_manage/comment_manage"
    },
    categoryCardList:{
      name:"分类管理",
      icon:"",
      path:"/model_manage/category_manage"
    },
    tagCardList:{
      name:"标签管理",
      icon:"",
      path:"/model_manage/tag_manage"
    },
    tagRelationCardList:{
      name:"友情链接",
<<<<<<< HEAD
      icon:"el-icon-link",  
=======
      icon:"",  
>>>>>>> 9d47891053a73571fde5e3f1a1d707e5c7a0a012
      path:"/model_manage/tagRelation_manage"
    }
  }
};