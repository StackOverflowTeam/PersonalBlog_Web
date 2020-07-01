<template>
  <div>
	   <div style="height: 100px;line-height: 100px;margin-top: 0;">

			<div style="width: 100%;height: 110px;font-size: 13px">
				<h1 class="logo" style="margin-left: 50px;font-size: 12px;float: left;margin-top: 20px;">
					<img src="@/assets/images/logo.png">
				</h1>
					 <span style="margin-right: 50px;float: right;">欢迎来到
					     <a href="http://localhost:8080/#/home" style="font-size:15px ;">小明 </a>的博客~</span>	
					 
					<el-menu :default-active="$router.path" background-color="white" class="nav" mode="horizontal" router>
					  <el-menu-item index="">文章</el-menu-item>
					  <el-menu-item >微语</el-menu-item>
					  <el-menu-item index="/massage">留言</el-menu-item>
				      <el-menu-item index="/photo">相册</el-menu-item>
					  <el-menu-item index="/home">个人主页</el-menu-item>
					</el-menu>
				</div>
	   </div>
	   <div  class="header-botton">
				<div style="float: left;margin: 0 auto;margin-top: 100px;">
					<p style="font-size: 60px;line-height: 20px;"> MY  </p>
					<p style="font-size: 60px;">BLOG </p>
					<p style="font-size: 30px;line-height: 20px;">well-balanced heart</p>
				</div>
				  <div style="height: 100px;font-size: 15px;color: orangered;float: right;margin:170px 150px;text-align: right;">
						<p style="line-height: 30px;">访问量 : 1000</p>
						<p>日志  : 1000</p>
				  </div>
	   </div>
	   <div >
			
			   <div style="height:1300px;">
				   
					  <div style="height:1300px;width: 40%;float: left;">
						  <div  id="a" style="font-size: 14px;margin-left: 30%;margin-top: 30px;float: right;">
							  <a href="#">设计文章 </a> |
							  <a href="#">前端文章 </a> |
							  <a href="#">旅游杂记 </a>
						  </div>
						  <div id="img" style="height: 700px;margin-top: 15px;">
							  <img src="../../assets/images/sy_img1.jpg" />
							  <img src="../../assets/images/sy_img2.jpg" />
							  <img src="../../assets/images/sy_img3.jpg" />
							  <img src="../../assets/images/sy_img4.jpg" />
							  <img src="../../assets/images/sy_img5.jpg" />
						  </div>
					  </div>
					  
					  <div style="height:1300px;width: 50%;;float: right;">
							<div style="font-size: 20px;float: left;margin-right: 50px;">
								<div style="height: 200px;margin-top: 100px;">
									<p>空间立体效果图，完美呈现最终效果</p>
									<div style="width: 2px;border: 1 solid black;margin-top: 15px;"></div>
									<p style="font-size: 10px;color: blue;">设计文章</p>
									<p style="font-size: 14px;margin-top: 30px;">室内设计作为一门新兴的学科，尽管还只是近数十年的事，但是人们有意识地对自己生活、生产活动的室内进行安排布置，甚至美化装饰，赋予室内环境以...</p>
									<a href="#"><img src="../../assets/images/jiantou.png" alt=""></a>
								</div>
								<div style="height: 200px;margin-top: 50px;">
									<p>空间立体效果图，完美呈现最终效果</p>
									<div style="width: 2px;border: 1 solid black;margin-top: 15px;"></div>
									<p style="font-size: 10px;color: blue;">设计文章</p>
									<p style="font-size: 14px;margin-top: 30px;">室内设计作为一门新兴的学科，尽管还只是近数十年的事，但是人们有意识地对自己生活、生产活动的室内进行安排布置，甚至美化装饰，赋予室内环境以...</p>
									<a href="#"><img src="../../assets/images/jiantou.png" alt=""></a>
								</div>
								<div style="height: 200px;margin-top: 50px;">
									<p>空间立体效果图，完美呈现最终效果</p>
									<div style="width: 2px;border: 1 solid black;margin-top: 15px;"></div>
									<p style="font-size: 10px;color: blue;">设计文章</p>
									<p style="font-size: 14px;margin-top: 30px;">室内设计作为一门新兴的学科，尽管还只是近数十年的事，但是人们有意识地对自己生活、生产活动的室内进行安排布置，甚至美化装饰，赋予室内环境以...</p>
									<a href="#"><img src="../../assets/images/jiantou.png" alt=""></a>
								</div>
								<div style="height: 200px;margin-top: 50px;">
									<p>空间立体效果图，完美呈现最终效果</p>
									<div style="width: 2px;border: 1 solid black;margin-top: 15px;"></div>
									<p style="font-size: 10px;color: blue;">设计文章</p>
									<p style="font-size: 14px;margin-top: 30px;">室内设计作为一门新兴的学科，尽管还只是近数十年的事，但是人们有意识地对自己生活、生产活动的室内进行安排布置，甚至美化装饰，赋予室内环境以...</p>
									<a href="#"><img src="../../assets/images/jiantou.png" alt=""></a>
								</div>
								<div style="height: 200px;margin-top: 50px;">
									<p>空间立体效果图，完美呈现最终效果</p>
									<div style="width: 2px;border: 1 solid black;margin-top: 15px;"></div>
									<p style="font-size: 10px;color: blue;">设计文章</p>
									<p style="font-size: 14px;margin-top: 30px;">室内设计作为一门新兴的学科，尽管还只是近数十年的事，但是人们有意识地对自己生活、生产活动的室内进行安排布置，甚至美化装饰，赋予室内环境以...</p>
									<a href="#"><img src="../../assets/images/jiantou.png" alt=""></a>
								</div>
							</div>			  
						</div>
				  </div>
				  <div class="block" style="margin-left: 40%;margin-top: 30px;">
				    <span class="demonstration"></span>
				    <el-pagination
				      layout="prev, pager, next"
				      :total="50">
				    </el-pagination>
		   </div>
	   </div>
	  <hr style="margin-top: 120px;">
	   <div>
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
		   
	   </div>

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
	background-image: url(../../assets/images/banner.jpg);
	background-size: cover;
	height:550px;
	color: white;
	
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
