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
	   <div  class="header-botton">
				
	   </div>
	   <div >
			   <div style="height:1300px;margin-top: 30px;">
					  <div style="height:200px;width:75%;margin: 0 auto;">
						 <textarea
						   placeholder="请输入您想说的话"
						   v-model="textarea"
						   style="border: 1px solid black;width: 100%;height: 130px;" >
						 </textarea>
				
				<el-button type="primary" size="medium" style="float: right;margin-top: 20px;margin-bottom: 20px;">提交</el-button>
						
					  </div>
					  <div style="height: 1200px;width:75%;margin: 0 auto;">
						  <p>全部留言</p>
						  <div style="height: 150px;margin-top: 40px;">
							  <img src="../../assets/images/header.png" style="float: left;"/>
							  <div style="float: left;width: 83%;margin-left: 40px;">
								  <p style="line-height: 20px;margin-bottom: 10px;">吳亦凡</p>
								  <p >敢问大师，师从何方？上古高人呐逐一地看完你的作品后，我的心久久 不能平静！这世间怎么可能还有如此精辟的作品？我不敢相信自己的眼睛。自从改革开放以后，我就以为再也不会有任何作品能打动我，没想到今天看到这个如此精妙绝伦的作品好厉害！</p>
							  </div>
						 </div>
						 <div style="height: 150px;margin-top: 40px;">
								  <img src="../../assets/images/header.png" style="float: left;"/>
								  <div style="float: left;width: 83%;margin-left: 40px;">
									  <p style="line-height: 20px;margin-bottom: 10px;">吳亦凡</p>
									  <p >敢问大师，师从何方？上古高人呐逐一地看完你的作品后，我的心久久 不能平静！这世间怎么可能还有如此精辟的作品？我不敢相信自己的眼睛。自从改革开放以后，我就以为再也不会有任何作品能打动我，没想到今天看到这个如此精妙绝伦的作品好厉害！</p>
								  </div>
						 </div>
						 <div style="height: 150px;margin-top: 40px;">
							  <img src="../../assets/images/header.png" style="float: left;"/>
							  <div style="float: left;width: 83%;margin-left: 40px;">
								  <p style="line-height: 20px;margin-bottom: 10px;">吳亦凡</p>
								  <p >敢问大师，师从何方？上古高人呐逐一地看完你的作品后，我的心久久 不能平静！这世间怎么可能还有如此精辟的作品？我不敢相信自己的眼睛。自从改革开放以后，我就以为再也不会有任何作品能打动我，没想到今天看到这个如此精妙绝伦的作品好厉害！</p>
							  </div>
						 </div>
						 <div style="height: 150px;margin-top: 40px;">
							  <img src="../../assets/images/header.png" style="float: left;"/>
							  <div style="float: left;width: 83%;margin-left: 40px;">
								  <p style="line-height: 20px;margin-bottom: 10px;">吳亦凡</p>
								  <p >敢问大师，师从何方？上古高人呐逐一地看完你的作品后，我的心久久 不能平静！这世间怎么可能还有如此精辟的作品？我不敢相信自己的眼睛。自从改革开放以后，我就以为再也不会有任何作品能打动我，没想到今天看到这个如此精妙绝伦的作品好厉害！</p>
							  </div>
						 </div>
						 <div style="height: 150px;margin-top: 40px;">
							  <img src="../../assets/images/header.png" style="float: left;"/>
							  <div style="float: left;width: 83%;margin-left: 40px;">
								  <p style="line-height: 20px;margin-bottom: 10px;">吳亦凡</p>
								  <p >敢问大师，师从何方？上古高人呐逐一地看完你的作品后，我的心久久 不能平静！这世间怎么可能还有如此精辟的作品？我不敢相信自己的眼睛。自从改革开放以后，我就以为再也不会有任何作品能打动我，没想到今天看到这个如此精妙绝伦的作品好厉害！</p>
							  </div>
						 </div>
						 <div style="height: 150px;margin-top: 40px;">
							  <img src="../../assets/images/header.png" style="float: left;"/>
							  <div style="float: left;width: 83%;margin-left: 40px;">
								  <p style="line-height: 20px;margin-bottom: 10px;">吳亦凡</p>
								  <p >敢问大师，师从何方？上古高人呐逐一地看完你的作品后，我的心久久 不能平静！这世间怎么可能还有如此精辟的作品？我不敢相信自己的眼睛。自从改革开放以后，我就以为再也不会有任何作品能打动我，没想到今天看到这个如此精妙绝伦的作品好厉害！</p>
							  </div>
						 </div>
					  </div>
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
	background-image: url(../../assets/images/liuyan.jpg);
	background-size: cover;
	height:350px;
	width: 75%;
	margin: 0 auto;
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
