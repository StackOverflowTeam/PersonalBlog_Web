<template>
  <div>
    <el-card style="border-radius: 0">
      <div slot="header">
        <span>欢迎来到{{perisonname}}的个人中心~</span>
      </div>
      <div class="demo">
		 <p style="text-align: center;font-size: 20px;margin-bottom: 20px;">我的介绍</p>
		 <div style="float: left;">
		   <img style="width: 500px;" src="../../assets/images/xc_img1.jpg"/>
		   <div style="font-size: 15px;float:right;margin-left: 20px;margin-top: 60px;">
		   	 <p>姓名:{{perisonname}}</p>
		   	 <p>年龄:{{age}}岁</p>
		   	 <p>职业:{{position}}</p>
		   	 <p>爱好:{{hobby}}</p>
		   </div>
		 </div>
		   
      </div>
    </el-card>
    <br />
    <el-card style="border-radius: 0;height: 300px;">
      <div slot="header">
        <span>我的技能</span>
      </div>
	  <div  class="img">
		  <img src="../../assets/images/gr_img2.jpg" alt="">
		  <img src="../../assets/images/gr_img3.jpg" alt="">
		  <img src="../../assets/images/gr_img4.jpg" alt="">
		  <img src="../../assets/images/gr_img5.jpg" alt="">
	  </div>
    </el-card>
	<br />
	<el-card style="border-radius: 0;height: 200px;">
	  <div slot="header">
	    <span>联系方式</span>
	  </div>
		  <div style="height:100px;width: 30%;float: left;margin-left: 150px;margin-top: 15px;">
				<img  style="height: 80px;" src="../../assets/images/erweima.jpg" />
		  </div>
			<div style="float: left;margin-left: 20px;font-size: 12px;margin-top: 15px;">
				<p style="margin-bottom: 10px;">我的联系方式</p>
				<p>微信 :   {{num}}</p>
				<p>手机 :   {{num}}</p>
				<p>邮箱 :   {{num}}@qq.com</p>
			</div>
	</el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      perisonname:"小明",
	  age:24,
	  position:"设计师, 前端工程师",
	  hobby:"旅游,打游戏",
	  num:"1234567890"
        }
    },
  methods: {

  },
  mounted: function() {}
};
</script>
<style lang="scss">
.demo {
	height: 300px;
   margin: 10px;

}
.demo p{
	margin-top: 20px;
}
.img{
	height:250px;margin-top: 20px;
	img{
		height: 100px;
		margin-left: 80px;
	}
} 
</style>
