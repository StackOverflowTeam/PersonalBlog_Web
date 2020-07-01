<template>
  <div>
	   <div style="height: 100px;line-height: 100px;margin-top: 0;">
			<div style="width: 100%;height: 110px;font-size: 13px">
					<h1 class="logo" style="margin-left: 50px;font-size: 12px;float: left;margin-top: 20px;">
						<img src="@/assets/images/logo.png">
					</h1>
					<el-menu :default-active="$router.path" background-color="white" class="nav" mode="horizontal" router>
					 <el-menu-item index="/personhome">文章</el-menu-item>
					 <el-menu-item >微语</el-menu-item>
					 <el-menu-item index="">留言</el-menu-item>
					 <el-menu-item index="/photo">相册</el-menu-item>
					 <el-menu-item index="/home">个人主页</el-menu-item>
					</el-menu>
				<span style="margin-right: 50px;float: right;">欢迎来到
			    <a href="http://localhost:8080/#/home" style="font-size:15px ;">小明 </a>的博客~</span>	
			</div>
	   </div>
	  
	  <div style="height:440px;margin-top: 20px;">
		   <div  class="header-botton"> </div>
		   <div style="float: right;margin-right: 200px;margin-top:100px;line-height: 60px;">
			   <p style="margin-bottom: 10px;color: orangered;">今日上传 2020/10/10</p>
			   <p>观赏最美的土耳其的日</p>
			</div>
	   </div>
	   <div >
			  <div style="height:1300px;margin: 85px auto;width: 85%;">
					<el-row :gutter="20" style="padding-left: 33px;margin-left: 25px;">
						<!-- 一行三个（24）多的会自动换行 -->
						<el-col :span="8" style="line-height: 25px;margin-bottom: 20px;">
							<img src="../../assets/images/xc_img3.jpg" style="width: 300px;" />
							<p style="color: orangered;">2019-01-11</p>
							<p class="el-icon-location-outline">江西九江</p>
							<p>今日天气：晴      庐山一日游</p>
						</el-col>
						<el-col :span="8" style="line-height: 25px;margin-bottom: 20px;">
							<img src="../../assets/images/xc_img4.jpg" style="width: 300px;" />
							<p style="color: orangered;">2019-01-11</p>
							<p class="el-icon-location-outline">江西九江</p>
							<p>今日天气：晴      庐山一日游</p>
						</el-col>
						<el-col :span="8" style="line-height: 25px;margin-bottom: 20px;">
							<img src="../../assets/images/xc_img5.jpg" style="width: 300px;" />
							<p style="color: orangered;">2019-01-11</p>
							<p class="el-icon-location-outline">江西九江</p>
							<p>今日天气：晴      庐山一日游</p>
						</el-col>
						<el-col :span="8" style="line-height: 25px;margin-bottom: 20px;">
							<img src="../../assets/images/xc_img3.jpg" style="width: 300px;" />
							<p style="color: orangered;">2019-01-11</p>
							<p class="el-icon-location-outline">江西九江</p>
							<p>今日天气：晴      庐山一日游</p>
						</el-col>
						<el-col :span="8" style="line-height: 25px;margin-bottom: 20px;">
							<img src="../../assets/images/xc_img3.jpg" style="width: 300px;" />
							<p style="color: orangered;">2019-01-11</p>
							<p class="el-icon-location-outline">江西九江</p>
							<p>今日天气：晴      庐山一日游</p>
						</el-col>
						<el-col :span="8" style="line-height: 25px;margin-bottom: 20px;">
							<img src="../../assets/images/xc_img4.jpg" style="width: 300px;" />
							<p style="color: orangered;">2019-01-11</p>
							<p class="el-icon-location-outline">江西九江</p>
							<p>今日天气：晴      庐山一日游</p>
						</el-col>
						<el-col :span="8" style="line-height: 25px;margin-bottom: 20px;">
							<img src="../../assets/images/xc_img5.jpg" style="width: 300px;" />
							<p style="color: orangered;">2019-01-11</p>
							<p class="el-icon-location-outline">江西九江</p>
							<p>今日天气：晴      庐山一日游</p>
						</el-col>
						<el-col :span="8" style="line-height: 25px;margin-bottom: 20px;">
							<img src="../../assets/images/xc_img3.jpg" style="width: 300px;" />
							<p style="color: orangered;">2019-01-11</p>
							<p class="el-icon-location-outline">江西九江</p>
							<p>今日天气：晴      庐山一日游</p>
						</el-col>
						<el-col :span="8" style="line-height: 25px;margin-bottom: 20px;">
							<img src="../../assets/images/xc_img3.jpg" style="width: 300px;" />
							<p style="color: orangered;">2019-01-11</p>
							<p class="el-icon-location-outline">江西九江</p>
							<p>今日天气：晴      庐山一日游</p>
						</el-col>
						<el-col :span="8" style="line-height: 25px;margin-bottom: 20px;">
							<img src="../../assets/images/xc_img4.jpg" style="width: 300px;" />
							<p style="color: orangered;">2019-01-11</p>
							<p class="el-icon-location-outline">江西九江</p>
							<p>今日天气：晴      庐山一日游</p>
						</el-col>
					</el-row>
			  </div>
			   
				  <div class="block" style="margin-left: 36%;margin-top: 55px;width:20%;">
				    <span class="demonstration"></span>
				    <el-pagination
				      layout="prev, pager, next"
				      :total="50">
				    </el-pagination>
		   </div>
	   </div>
	  <hr style="margin-top: 60px;">
	   <el-foot>
		   <div  style="height:300px;">
			   <div style="height:150px;width: 30%;float: left;margin-left: 150px;margin-top: 100px;">
				   <img  style="height: 120px;" src="../../assets/images/erweima.jpg" />
			   </div>
			   <div style="height:150px;width: 30%;float: right;margin-right: 100px;margin-top: 100px;">
				   <img src="../../assets/images/down_img.jpg" style="float: left;height: 120px">
				       <div style="float: left;margin-left: 20px;margin-top: 30px;">
							<p style="margin-bottom: 10px;">我的联系方式</p>
							<p>微信 :   1234567890</p>
							<p>手机 :   1234567890</p>
							<p>邮箱 :   1234567890@qq.com</p>
						</div>
			   </div>
		   </div>
		   
	   </el-foot>

  </div>
</template>

<script>
export default {
  data() {
    return {
		
    };
  },
  // methods: {
 
 
  // },
};
</script>
<style lang="scss">
.nav{
	margin-left: 20%;
	margin-top: 20px;
	float: left;
}

.header-botton {
	background-image: url(../../assets/images/xc_img1.jpg);
	height:400px;
	width: 50%;
	float: left;
	margin-left: 155px;
}
#a a{
	color: black;
}
#a a:hover{
	color:orangered
}
#img img{
	margin-top: 50px;
	height: 200px;
	float: right;
}
</style>
