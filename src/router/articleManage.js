import Layout from "@/views/layout/App.vue";
export default {
  path: "/article_manage",
  component: Layout,
  name: "ArticleManage",
  redirect: "/article_manage/list",
  meta: {
    title: "个人博客"
  },
  children: [
    {
      path: "/list",
      name: "ArticleManageList",
      meta: {
        title: "我的博客"
      },
      component: resolve =>
        require(["@/views/articleManage/articleList/Index.vue"], resolve)
    },
	{
	  path: "/writlist",
	  name: "ArticleManageList",
	  meta: {
	    title: "写博客"
	  },
	  component: resolve =>
	    require(["@/views/articleManage/articleList/WritBlog.vue"], resolve)
	}
  ]
};
