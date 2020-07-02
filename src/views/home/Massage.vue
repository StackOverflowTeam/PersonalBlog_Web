<template>
  <div class="nav">
	   <div  class="header-botton">
				<img src="../../assets/images/liuyan.jpg" />
	   </div>
			   <div style="height:1600px;padding-top: 455px;">
					  <div style="height:240px;width:75%;margin: 0 auto;margin-bottom: 15px;">
						 <textarea
						   placeholder="请输入您想说的话"
						   v-model="textarea"
						   style="border: 1px solid black;width: 100%;height: 130px;margin-top: 30px;" >
						 </textarea>
				       <el-button type="primary" size="medium" style="float: right;margin-top: 20px;margin-bottom: 20px;">提交</el-button>
					  </div>
					  
					 <div style="height: 1000px;width:75%;margin:15px auto;">
						  <p style="margin-bottom: 30px;text-align: center;">全部留言</p>
						  <div style="height: 180px;">
							  <img src="../../assets/images/header.png" style="float: left;"/>
							  <div style="float: left;width: 60%;margin-left: 40px;">
								  <p style="line-height: 20px;margin-bottom: 10px;">{{critcal}}</p>
								  <p >{{message}}</p>
							  </div>
						 </div>
						 <div style="height: 180px;">
								  <img src="../../assets/images/header.png" style="float: left;"/>
								  <div style="float: left;width: 60%;margin-left: 40px;">
									  <p style="line-height: 20px;margin-bottom: 10px;">{{critcal}}</p>
									  <p >{{message}}</p>
								  </div>
						 </div>
						 <div style="height: 180px;">
								  <img src="../../assets/images/header.png" style="float: left;"/>
								  <div style="float: left;width: 60%;margin-left: 40px;">
									  <p style="line-height: 20px;margin-bottom: 10px;">{{critcal}}</p>
									  <p >{{message}}</p>
								  </div>
						 </div>
						<div style="height: 180px;">
								  <img src="../../assets/images/header.png" style="float: left;"/>
								  <div style="float: left;width: 60%;margin-left: 40px;">
									  <p style="line-height: 20px;margin-bottom: 10px;">{{critcal}}</p>
									  <p >{{message}}</p>
								  </div>
						</div>
						<div style="height: 180px;">
								  <img src="../../assets/images/header.png" style="float: left;"/>
								  <div style="float: left;width: 60%;margin-left: 40px;">
									  <p style="line-height: 20px;margin-bottom: 10px;">{{critcal}}</p>
									  <p >{{message}}</p>
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
</template>

<script>
export default {
  data() {
    return {
		message:"敢问大师，师从何方？上古高人呐逐一地看完你的作品后，我的心久久 不能平静！这世间怎么可能还有如此精辟的作品？我不敢相信自己的眼睛。自从改革开放以后，我就以为再也不会有任何作品能打动我，没想到今天看到这个如此精妙绝伦的作品好厉害！",
		critcal:"吴亦凡"
    };
  },
  // methods: {
 
 
  // },
};
</script>
<style lang="scss">
.nav{
	padding: 50px;
}

.header-botton {
	// height:500px;
	width: 70%;
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
