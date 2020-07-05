<template>
  <div class="body-top">
    <div class="body-top-btn" @click="hiddenSidebar">
      <i class="el-icon-menu"></i>
    </div>
    <div class="right">
      <span class="body-top-btn" @click="screenFullToggle">
        <i class="fa fa-arrows-alt"></i>
      </span>
      <!--    <el-dropdown>
        <el-dropdown-menu slot="dropdown">
          <div style="padding: 10px 20px;text-align: center;">
            <el-button-group>
              <el-button
                :type="system.navType === item.value ? 'primary' : ''"
                size="mini"
                v-for="item in GlobalCfg.systemNavType"
                :key="item.value"
                @click="$store.commit('NAV_TYPE_TOGGLE', item.value)"
                >{{ item.label }}</el-button
              >
            </el-button-group>
          </div>
        </el-dropdown-menu>
      </el-dropdown>-->
      <el-dropdown>
        <span class="body-top-btn">
          <!-- Tips: 还是要想办法动态生成username-->
          <!-- 如果上面的标志删了后就会显得顶部有点空 可以考虑把这个二级标题拆开-->
          {{ userName }}
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item @click.native="$router.push('/personhome')">
            <i style="padding-right: 8px" class="fa fa-user"></i>主页
          </el-dropdown-item>
          <el-dropdown-item @click.native="$router.push('/login')">
            <i style="padding-right: 8px" class="fa fa-sign-out"></i>退出
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>

import ScreenFull from "screenfull";
import { mapState } from "vuex";
import Menu from "@/menu/index";
export default {
  name: "BodyTop",
  data() {
    return {
      menu: Menu,
      // 动态获取
      userName: "Admin"
    };
  },
  // created() {
  //   this.initData();
  // },
  methods: {
    // 暂时先从登录接口中获取数据，但是更应该考虑session会话 
    // initData() {
    //   login()
    // },
    hiddenSidebar() {
      this.$store.commit("HIDE_SIDEBAR_TOGGLE");
    },
    screenFullToggle() {
      ScreenFull.toggle()
        .then(() => {})
        .catch(() => {
          this.$message({
            message: "你的浏览器不支持全屏！",
            type: "warning"
          });
        });
    }
  },
  computed: mapState(["system"])
};
</script>
<style lang="scss">
@import "../../assets/css/variables.scss";
.body-top {
  width: 100%;
  display: flex;
  height: 50px;
  background-color: $--color-primary;
  z-index: 10;
  .body-top-btn {
    overflow: hidden;
    height: $--top-height;
    display: inline-block;
    text-align: center;
    line-height: $--top-height;
    cursor: pointer;
    padding: 0 14px;
    color: #fff;
    .badge {
      .el-badge__content {
        margin-top: 10px;
      }
    }
    &:hover {
      background-color: mix(#000, $--color-primary, 10%);
    }
  }
  .right {
    flex: 1;
    display: flex;
    justify-content: flex-end;
  }
}
</style>
