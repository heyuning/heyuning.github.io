<template>
  <div id="app">
  		<router-view></router-view>
  		<div class="foot">
  			<div>
  					<a href="https://t.shuqi.com/#!/ac/in/ct/download" class="xzbtn">下载书旗小说客户端</a>
  					<p class="bs-slogan">
  						海量图书，更高品质阅读体验
  					</p>
  					<p>©2016书旗网shuqi.com</p>
  					<p>粤ICP备13078413号-1</p>
  					<p>网络文化经营许可证：粤网文[2017]3018-499号</p>
  					<p>增值电信业务经营许可证：粤B2-20130742</p>
  					<p>广州阿里巴巴文学信息技术有限公司 版权所有</p>
  					<p>广州市天河区黄埔大道西平云路163号广电平云广场B塔13层自编03单元</p>
  					<p>0571-26883636</p>
  			</div>
  		</div>
   </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
    
  },
  created(){
    	console.log(this.$http)
    }
}
</script>

<style>
*{
	padding: 0;
	margin: 0;
	text-decoration: none;
	list-style: none;
}
.bs-slogan{
		    color: #333;
    font-size: .28rem;
    line-height: .4rem;
    margin: .24rem .32rem;
    display: block;
}
.foot{
	  padding: .48rem .32rem .44rem;
	  display: block;
    color: #999;
    font-size: .24rem;
    line-height: .4rem;
    text-align: center;
    background-color: #f0f0f3;
}
.xzbtn{
	    display: block;
	    background: #00c98d;
    color: #fff;
    height: .78rem;
    line-height: .8rem;
    padding: 0 .2rem;
    border: 1px solid #00c98d;
    border-radius: .08rem;
    font-size: .28rem;
    text-align: center;
}
</style>
