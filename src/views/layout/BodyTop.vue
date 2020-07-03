<template>
  <div class="body-top">
    <div class="body-top-btn" @click="hiddenSidebar">
      <i class="el-icon-menu"></i>
    </div>
    <div class="right">
      <span class="body-top-btn" @click="screenFullToggle">
        <i class="fa fa-arrows-alt"></i>
      </span>
      <!--其实个人觉得这级el-dropdown可以不要。————来自zq的吐槽 -->
<<<<<<< HEAD
  <!--    <el-dropdown>
=======
      <el-dropdown>
        <span class="body-top-btn">
          <i class="el-icon-setting"></i>
        </span> 
>>>>>>> 9d47891053a73571fde5e3f1a1d707e5c7a0a012
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
<<<<<<< HEAD
      </el-dropdown> -->
=======
      </el-dropdown>
      <span class="body-top-btn">
      <!-- 这个铃铛标志也有点鸡肋 看到红点我就想点 想消掉欸。————来自zq的吐槽-->
        <el-badge is-dot class="badge">
          <i class="el-icon-bell"></i>
        </el-badge>
      </span>
>>>>>>> 9d47891053a73571fde5e3f1a1d707e5c7a0a012
      <el-dropdown>
        <span class="body-top-btn">
        <!-- Tips: 还是要想办法动态生成username-->
        <!-- 如果上面的标志删了后就会显得顶部有点空 可以考虑把这个二级标题拆开-->
        <!-- 写前端的 耐心点  不要打“死”我-->
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
      userName: "小明"
    };
  },
  methods: {
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
    },
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
