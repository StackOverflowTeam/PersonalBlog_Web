
<template>
  <div class="footer">  
    <p id="p">
      若给您带来不便,请联系
      <a href="javascript:;">{{ GlobalCfg.corporation }}</a>   |
      Copyright © 2020
      <a href="javascript:;">{{ GlobalCfg.corporation }}</a>  
      .All rights reserved.   |  
      <a href="javascript:;">
        {{GlobalCfg.siteName}}
      </a>   |  
      <a>Version</a>
      {{ GlobalCfg.version }}
    </p>
    
  </div>
</template>

<style lang="scss">
@import "../../assets/css/variables.scss";
.footer {
  position: absolute;
  text-align: center;
  left: 0px;
  bottom: 0px;
  width: 100%;
  font-size: 15px;
  background: #E7E3D7;
  line-height: 50px;
  //padding: 0;
  height: 50px;
  color: #5D7043;
  .p{
    margin: 55px 0 30px 0;
  }
  //border-top: 1px solid #d2d6de;
  //float: left;
  //.version {
    //float: right;
  //  b {
  //    font-weight: 700;
  //  }
  //  .github {
  //    color: #444;
  //    font-size: 20px;
  //    margin-left: 8px;
  //    &:hover {
  //      color: #8bc34a;
  //    }
  //  }
  //}
}
</style>
