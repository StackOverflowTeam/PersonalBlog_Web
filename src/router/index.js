/*
 * @Author: Zhang Qing
 * @Date: 2020-07-02 17:24:07
 * @LastEditTime: 2020-07-04 09:52:12
 * @LastEditors: your name
 * @Description: 
 * @FilePath: \PersonalBlog_Web\src\router\index.js
 */ 
import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/views/layout/App.vue";
import ArticleManage from "./articleManage";
import EditBlogManage from "./editBlogManage";
import ModelManage from "./modelManage";
import SystemManage from "./systemManage";
Vue.use(VueRouter);

const routes = [
	{
	  path: "/personhome",
	  name: "Home",
	  meta: {
	    title: "首页",
	  },
	  components: {
	    blank: resolve => require(["@/views/home/Bloghome.vue"], resolve)
	  }
	},
	{
	  path: "/massage",
	  name: "massage",
	  meta: {
	    title: "留言",
	  },
	  components: {
	    blank: resolve => require(["@/views/home/Massage.vue"], resolve)
	  }
	},
	{
	  path: "/photo",
	  name: "photo",
	  meta: {
	    title: "相册",
	  },
	  components: {
	    blank: resolve => require(["@/views/home/Photo.vue"], resolve)
	  }
	},
	{
	  path: "/login",
	  name: "Login",
	  meta: {
	    title: "个人登录",
	    keepAlive: false //保持激活状态
	  },
	  components: {
	    blank: resolve => require(["@/views/login/Login.vue"], resolve)
	  }
	},
		
  {
    path: "/",
    component: Layout,
    name: "Dashboard",
    redirect: "/home",
    meta: {
      title: "后台管理"
    },
    children: [
      {
        path: "home",
        name: "DashboardHome",
        meta: {
          title: "管理首页"
				},
        component: resolve => require(["@/views/dashboard/Index.vue"], resolve)				
        // component: resolve => require(["@/views/home/Index.vue"], resolve)
			},
    ]
  },
	ArticleManage,
	EditBlogManage,
	ModelManage,
	SystemManage
];

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

const router = new VueRouter({
  routes
});

export default router;
