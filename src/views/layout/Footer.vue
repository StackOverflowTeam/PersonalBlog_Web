<template>
 <div class="footer">
    <div class="version">
      <a href="javascript:;" style="margin-right: 20px">{{
        GlobalCfg.siteName
      }}</a>
    </div>
    <strong>
      若给您带来不便,请联系
      <a href="javascript:;"> {{ GlobalCfg.corporation }} </a></strong
    >
  </div>
</template>

<style lang="scss">
@import "../../assets/css/variables.scss";
.footer {
  //position: absolute;
  left: 0px;
  bottom: 0px;
  width: 100%;
  font-size: 14px;
  background: #fff;
  line-height: 20px;
  padding: 0 ;
  height: 20px;
  color: #444;
  border-top: 1px solid #d2d6de;
  float: left;
  .version {
    float: right;
    b {
      font-weight: 700;
    }
    .github {
      color: #444;
      font-size: 20px;
      margin-left: 8px;
      &:hover {
        color: #8bc34a;
      }
    }
  }
}
</style>
