<template>
  <div>
	  <div class="header-botton">
		  <img src="../../assets/images/banner.jpg" height="400px" width="150%" style="margin: 0 auto;"/>
		  <div style="width: 130%;position: absolute;left:10px; top:10px">
			  <span style="float: left;margin-top: 60px;margin-left: 50px;">
				<p style="font-size: 60px;line-height: 30px;"> MY  </p>
				<p style="font-size: 60px;">BLOG </p>
				<p style="font-size: 30px;line-height: 60px;">well-balanced heart</p>
			  </span>
				<span style="font-size: 15px;color: orangered;float: right;margin-top: 100px;margin-right: 100px;">
					<p style="line-height: 80px;">访问量 : 1000</p>
					<p>日志  : 1000</p>
				</span>
		  </div>
	  </div> 
	  
			   <div style="height:1300px;margin-top: 30px;">
					  <div style="width: 40%;float: left;">
						  <div  id="a" style="font-size: 14px;margin-left: 30%;margin-top: 30px;float: right;">
							  <a href="#" style="color: orangered;">设计文章 </a> |
							  <a href="#">前端文章 </a> |
							  <a href="#">旅游杂记 </a>
						  </div>
						  <div id="img" style="margin-top: 15px;">
							  <img src="../../assets/images/sy_img1.jpg" />
							  <img src="../../assets/images/sy_img2.jpg" />
							  <img src="../../assets/images/sy_img3.jpg" />
							  <img src="../../assets/images/sy_img4.jpg" />
	
						  </div>
					  </div>
					  
					  <div style="width: 50%;float: right;">
							<div style="font-size: 20px;float: left;margin-right: 50px;">
								<div style="height: 180px;margin-top: 110px;">
									<p>空间立体效果图，完美呈现最终效果</p>
									<div style="width: 2px;border: 1 solid black;margin-top: 15px;"></div>
									<p style="font-size: 10px;color: blue;">设计文章</p>
									<p style="font-size: 14px;margin-top: 30px;">室内设计作为一门新兴的学科，尽管还只是近数十年的事，但是人们有意识地对自己生活、生产活动的室内进行安排布置，甚至美化装饰，赋予室内环境以...</p>
									<a href="#"><img src="../../assets/images/jiantou.png" alt=""></a>
								</div>
								<div style="height: 180px;margin-top: 60px;">
									<p>空间立体效果图，完美呈现最终效果</p>
									<div style="width: 2px;border: 1 solid black;margin-top: 15px;"></div>
									<p style="font-size: 10px;color: blue;">设计文章</p>
									<p style="font-size: 14px;margin-top: 30px;">室内设计作为一门新兴的学科，尽管还只是近数十年的事，但是人们有意识地对自己生活、生产活动的室内进行安排布置，甚至美化装饰，赋予室内环境以...</p>
									<a href="#"><img src="../../assets/images/jiantou.png" alt=""></a>
								</div>
								<div style="height: 180px;margin-top: 60px;">
									<p>空间立体效果图，完美呈现最终效果</p>
									<div style="width: 2px;border: 1 solid black;margin-top: 15px;"></div>
									<p style="font-size: 10px;color: blue;">设计文章</p>
									<p style="font-size: 14px;margin-top: 30px;">室内设计作为一门新兴的学科，尽管还只是近数十年的事，但是人们有意识地对自己生活、生产活动的室内进行安排布置，甚至美化装饰，赋予室内环境以...</p>
									<a href="#"><img src="../../assets/images/jiantou.png" alt=""></a>
								</div>
								<div style="height: 180px;margin-top: 60px;">
									<p>空间立体效果图，完美呈现最终效果</p>
									<div style="width: 2px;border: 1 solid black;margin-top: 15px;"></div>
									<p style="font-size: 10px;color: blue;">设计文章</p>
									<p style="font-size: 14px;margin-top: 30px;">室内设计作为一门新兴的学科，尽管还只是近数十年的事，但是人们有意识地对自己生活、生产活动的室内进行安排布置，甚至美化装饰，赋予室内环境以...</p>
									<a href="#"><img src="../../assets/images/jiantou.png" alt=""></a>
								</div>
							</div>			  
						</div>
				  </div>

			<div class="block" style="margin-left: 36%;margin-top: 210px;width:20%;margin-bottom: 40px;">
				<span class="demonstration"></span>
				<el-pagination
				  layout="prev, pager, next"
				  :total="50">
				</el-pagination>
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
.header-botton {
	    float: left;
		position: relative;
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
	height: 190px;
	float: right;
}
</style>
