export default {
  name: "博客",
  permissionsKey: "",
  icon: "fa fa-envelope-open",
  children: {
    courseCardList: {
      name: "写博客",
      permissionsKey: "",
      path: "/articleManage/category"
    },
    organCardList: {
      name: "我的博客",
      permissionsKey: "",
      path: "/list"
    }
  }
};
