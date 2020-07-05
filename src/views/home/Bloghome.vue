<template>
	<div style="height: 100px;margin: 40px auto;">
		<div class="pageTitle">
			<img src="../../assets/images/logo.png"/>
		</div>
		<ul class="topNav">
			<li :class="[showHot==0?'active':'']" @click="showHot=0">文章</li>
			<!-- <li :class="[showHot==1?'active':'']" @click="showHot=1">微语</li> -->
			<li :class="[showHot==2?'active':'']" @click="showHot=2">留言</li>
			<li :class="[showHot==3?'active':'']" @click="showHot=3">相册</li>
			<!-- href="http://localhost:8080/#/home" @click="bloghome" -->
			<li ><a @click="$router.push('/model_manage/blog_manage')" style="color: black;line-height: 48px;" >博客管理</a></li>
		</ul>
		<div>
			<span style="margin-right: 50px;float: right;">欢迎来到
		<!--	<a href="http://localhost:8080/#/home" style="font-size:20px ;"> -->
		<a @click="$router.push('/home')" target="_self" style="font-size:20px ;">
			{{personname}} </a>的博客~</span>	
		</div>
		<div class="main" style="padding-top: 20px;">
			<artical v-show="showHot==0"></artical>
			<!-- <saylittle v-show="showHot==1"></saylittle> -->
			<message v-show="showHot==2"></message>
			<photo v-show="showHot==3"></photo>
		</div>
		<div>
			<hr>
			   <div  style="height:260px;">
				   <div style="height:120px;width: 30%;float: left;margin-left: 150px;margin-top: 100px;">
					 <!--二维码-->
					   <img  style="height: 120px;" src="../../assets/images/erweima.jpg" />
				   </div>
				   <div style="height:120px;width: 30%;float: right;margin-right: 100px;margin-top: 100px;">
					   <!--？？？？？-->
						 <img src="../../assets/images/down_img.jpg" style="float: left;height: 120px">
						   <div style="float: left;margin-left: 20px;margin-top: 30px;">
								<p style="margin-bottom: 10px;">我的联系方式</p>
								<p>微信 :   {{num}}</p>
								<p>手机 :   {{num}}</p>
								<p>邮箱 :   {{num}}@qq.com</p>
							</div>
				   </div>
			   </div>
		</div>
	</div>
</template>

<script>
	import artical from '@/views/home/Artical'
	// import saylittle from '@/views/home/Saylittle'
	import  message from '@/views/home/Massage'
	import  photo   from  '@/views/home/Photo'
	export default {
		name: "index",
		components:{
			artical,
			// saylittle,
			message,
			photo
		},
		data() {
			return {
				num:"1234567890",
				personname: "小明",
				showHot: 0
			}
		},
		methods:{
			bloghome(){
				this.$router.replace("/home");
			}
		}
	};
</script>

<style>
	.top{
		width: 100%;
		position: fixed;
		z-index: 9;
	}
	.pageTitle {
		margin-left: 50px;
		float: left;
		margin-top: 10px;
	}

	.topNav {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
	}

	.topNav li {
		cursor: pointer;
		list-style: none;
	}

	.active {
		color: rgb(255, 85, 0);
		border-bottom: 2px solid rgb(255, 85, 0);
	}

/* 	.main {
		padding: 50px;
	} */
</style>
