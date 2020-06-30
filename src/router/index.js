import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/views/layout/App.vue";
import ArticleManage from "./articleManage";
Vue.use(VueRouter);

const routes = [
	{
	  path: "/personhome",
	  name: "Home",
	  meta: {
	    title: "主页",
	  },
	  components: {
	    blank: resolve => require(["@/views/home/Bloghome.vue"], resolve)
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
      title: "首页"
    },
    children: [
      {
        path: "home",
        name: "DashboardHome",
        meta: {
          title: "个人中心"
        },
        component: resolve => require(["@/views/home/Index.vue"], resolve)
      }
    ]
  },
  ArticleManage,
];

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

const router = new VueRouter({
  routes
});

export default router;
