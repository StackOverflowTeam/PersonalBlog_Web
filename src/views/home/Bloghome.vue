<template>
  <div>
	   <el-header style="height: 600px;line-height: 100px;margin-top: 0;">

			<div style="width: 100%;height: 110px;font-size: 13px">
					<h1 class="logo" style="margin-left: 50px;font-size: 12px;float: left;margin-top: 20px;">
						<img src="@/assets/images/logo.png">
					</h1>
				<div class="nav" style="margin-left: 100px;float: left;">
					<a  class="active" href="#">文章</a>
					<a  href="#">微语</a>
					<a  href="#">留言</a>
					<a  href="#">相册</a>
					<a  href="#">关于</a>
				</div>   
				<span style="margin-right: 50px;float: right;">欢迎来到
				<a href="#" style="font-size:15px ;">小明 </a>的博客~</span>	
			</div>
			<div  class="header-botton">
				<div style="float: left;margin: 0 auto;margin-top: 100px;">
					<p style="font-size: 60px;line-height: 20px;"> MY  </p>
					<p style="font-size: 60px;">BLOG </p>
					<p style="font-size: 30px;line-height: 20px;">well-balanced heart</p>
				</div>
				  <div style="height: 100px;font-size: 15px;color: orangered;float: right;margin:170px 150px;text-align: right;">
						<p style="line-height: 20px;">访问量 : 1000</p>
						<p>日志  : 1000</p>
				  </div>
			</div>
	   </el-header>
	   <el-main >
		   <div style="height:1100px;background-color: blue;margin-bottom: 0;">
		   		  <div style="height:1100px;width: 40%;background-color: pink;float: left;">
					  
				  </div>
		   		  <div style="height:1100px;width: 50%;background-color: pink;float: right;">
		   		  					  
		   		  </div>
		   </div>
		   
	   </el-main>
	  <hr style="border-width: 0;">
	   <el-foot>
		   <div  style="height:200px;;background-color: wheat;">
			   <div style="height:200px;width: 30%;float: left;background-color: green;">
				   
			   </div>
			   <div style="height:200px;width: 30%;float: right;background-color: green;">
			   				   
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
.nav a{
	color: #3f2863; margin:0 30px;
}
.header-botton {
	background-image: url(../../assets/images/banner.jpg);
	background-size: cover;
	height:470px;
	color: white;
}
</style>
