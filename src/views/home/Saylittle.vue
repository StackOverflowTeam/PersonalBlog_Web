<template>
  <div class="nav">
	  <div style="height:1300px;margin: 85px auto;width: 90%;">
			<div style="height: 400px;margin-bottom: 90px;padding: 50px 46px 20px 54px;width: 85%;margin-left: 100px;position: relative;">
					<p class="el-icon-date" style="line-height: 60px;color: orangered;">12:25 2018/06/08</p>
					<p style="line-height: 24px;">
						一直听说牛油果吃起来像肥皂、肥肉，虽然很难吃，但是价格却很贵，我还是想尝试一下。
						今天公司新到了新西兰牛油果，这是新西兰牛油果是第一次在中国上市，个头比普通牛油果大了一倍，被誉为“超牛果”。
						好奇心驱使我尝了一颗，第一次吃牛油果没有见识，切开牛油果费了好大劲，切成了这样。 
					</p>
					<img src="../../assets/images/wy_img1.jpg" style="height: 200px;margin-top: 10px;padding: 4px;"/>
					
					<el-collapse v-model="activeNames" @change="handleChange" style="position: absolute;">
					  <el-collapse-item title="评论"  name="1" >
								  <el-card>
									<img src="../../assets/images/header2.png" style="float: left;margin-left: 10px;margin-right: 40px;"/>
										 <textarea
										   placeholder="请输入您的评论"
										   v-model="textarea"
										   style="border: 1px solid black;width: 50%;height: 130px;float: left;" >
										 </textarea>
									   <el-button type="primary" size="medium" style="margin-top: 160px;">发表</el-button>
						
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
							<el-pagination
							  layout="prev, pager, next"
							  :total="50">
							</el-pagination>
						</el-card>
			  </el-collapse-item>
			</el-collapse>
	</div>	

			
			
			
			<div style="height: 400px;margin-bottom: 90px;padding: 50px 46px 20px 54px;width: 85%;margin-left: 100px;position: relative;">
							<p class="el-icon-date" style="line-height: 60px;color: orangered;">12:25 2018/06/08</p>
							<p style="line-height: 24px;">
								一直听说牛油果吃起来像肥皂、肥肉，虽然很难吃，但是价格却很贵，我还是想尝试一下。
								今天公司新到了新西兰牛油果，这是新西兰牛油果是第一次在中国上市，个头比普通牛油果大了一倍，被誉为“超牛果”。
								好奇心驱使我尝了一颗，第一次吃牛油果没有见识，切开牛油果费了好大劲，切成了这样。 
							</p>
							<img src="../../assets/images/wy_img1.jpg" style="height: 200px;margin-top: 10px;padding: 4px;"/>
							
							<el-collapse v-model="activeNames" @change="handleChange" style="position: absolute;">
							  <el-collapse-item title="评论"  name="2" >
								<div >
											<img src="../../assets/images/header2.png" style="float: left;margin-left: 10px;margin-right: 40px;"/>
												 <textarea
												   placeholder="请输入您的评论"
												   v-model="textarea"
												   style="border: 1px solid black;width: 50%;height: 130px;float: left;" >
												 </textarea>
											   <el-button type="primary" size="medium" style="margin-top: 160px;">发表</el-button>
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
									<el-pagination
									  layout="prev, pager, next"
									  :total="50">
									</el-pagination>
					  </el-collapse-item>
					</el-collapse>
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
		 activeNames: '0'
    };
  },
  methods: {
	
  },
};
</script>
<style lang="scss">
.nav{

	padding: 50px;
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
