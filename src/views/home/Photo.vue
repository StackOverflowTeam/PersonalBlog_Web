<template>
  <div class="nav">
	  
	  <div style="height:440px;margin-top: 20px;">
		   <div  class="header-botton"> 
		     <img src="../../assets/images/xc_img1.jpg" />
		   </div>
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
			   
				
	   </div>
	<div class="block" style="margin-left: 36%;margin-top: 55px;width:20%;">
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
.nav{
	// margin-left: 20%;
	// margin-top: 20px;
	// float: left;
	padding: 50px;
}
.header-botton {
	
	height:400px;
	width: 55%;
	margin: 0 auto;
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
