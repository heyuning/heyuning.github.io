<template>
	<div style="background: rgb(240,240,242);">
		<!--<headeritem></headeritem>-->
		<div>
			<mt-tabbar v-model="selected" style="top: 0;">
				<mt-tab-item id="分类">
					<a href="#/no1">
						
					
					<div class="nav_zz" style="backgrthis.sy_listthis.sy_listound-position: 0 0;">

					</div>
					分类
					</a>
				</mt-tab-item>
				<mt-tab-item id="排行">
					<a href="#/no2">
					<div class="nav_zz" style="background-position:0 .7rem;">

					</div>
					排行
					</a>
				</mt-tab-item>
				<mt-tab-item id="女频">
					<a href="#/no3">
					<div class="nav_zz" style="background-position:0 1.4rem;">

					</div>
					女频
					</a>
				</mt-tab-item>
				<mt-tab-item id="男频">
					<a href="#/no4">
					<div class="nav_zz" style="background-position:0 2.1rem;">

					</div>
					男频
					</a>
				</mt-tab-item>
				<mt-tab-item id="书架">
					<a href="#/no5">
					<div class="nav_zz">

					</div>
					书架
					</a>
				</mt-tab-item>
			</mt-tabbar>
		</div>
		<!--banner-->

		<div style="margin-top: 1.4rem;">
			<img style="width: 100%;height: auto;" src="http://img-tailor.11222.cn/pm/book/operate/2018020715462184.jpg">
		</div>
		<!--内容-->
		<div v-for="i in jp_list" v-if="i._uniq" style="background: red; background: #fff; margin-top: .15rem;">
			<h4 style="text-indent: 1em; height: 0.58rem;  margin: 0.1rem 0 0rem;"><span style="width: 0.1rem;height:0.3rem;margin-top: 0.1rem; display: inline-block;background: #00c98d;position: relative;left: -.32rem;top: .05rem;"></span>{{i.m_s_name}}</h4>
			<div class="clearfix" style="padding: 0.3rem;">
				<div style="width: 25%;float: left;" v-for="(item,index) in i.content" v-if="item.length!=0">
					<img style="width:1.2rem;height: 1.6rem;" :src="item.book_cover" v-if="index<4" />
					<div v-if="index<4" style="overflow: hidden;    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;
    display: block;
    font-size: .24rem;
    line-height: .32rem;
    height: .32rem;
    text-align: left;">{{item.bookname}}</div>
					<div style="overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;
    display: block;
    font-size: .24rem;
    line-height: .32rem;
    height: .32rem;
    text-align: left;color: #999;" v-if="index<4">
						{{item.author_name}}
					</div>
				</div>

			</div>

			<div style="padding: 0.3rem;" v-for="(item,index) in i.content" v-if="index>3">
<div class="clearfix" style="border-top: 1px solid #f3f3f3;padding: .32rem .32rem .32rem 0;color: #333;">
	<div style="color: #333;
    line-height: .4rem;
    -webkit-box-flex: 1;overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;font-size: .3rem;float: left; width: 3rem;overflow: hidden;">
		{{item.bookname}}
	</div>
	<div style="font-size: .3rem;float: right;">
		<span style="color: #70a7e3;border-color: rgba(112,167,227,.3);display: inline-block;height: .36rem;line-height: .38rem;
    padding: 0 .11rem;
    border: 1px solid rgba(153,153,153,.3);
    border-radius: .04rem;
    font-size: .2rem;    margin-right: .08rem;
    vertical-align: text-bottom;
    background: transparent;">
							{{item.stat_name}}
						</span>
		<span style="color: #70a7e3;
    border-color: rgba(112,167,227,.3);display: inline-block;
    height: .36rem;
    line-height: .38rem;
    padding: 0 .11rem;
    border: 1px solid rgba(153,153,153,.3);
    border-radius: .04rem;
    font-size: .2rem;    margin-right: .08rem;
    vertical-align: text-bottom;
    background: transparent;">
							{{item.class_name}}
						</span>
	</div>

</div>
<div style="overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;
    font-size: .24rem;
    line-height: .32rem;
    height: .32rem;
    color: #999;">
	{{item.introduction}}
</div>
</div>
<div style="    width: 100%;
    height: .96rem;
    line-height: .96rem;
    color: #333;
    font-size: .28rem;
    vertical-align: middle;
    display: inline-block;
    text-align: center;border-top: 3px solid #f3f3f3">
	换一换
</div>
</div>
		<div v-for="(i,ind) in sy_list" v-if="i._uniq" style="background: red; background: #fff; margin-top: .15rem;">
			<h4 style="text-indent: 1em; height: 0.58rem;  margin: 0.1rem 0 0rem;"><span style="width: 0.1rem;height:0.3rem;margin-top: 0.1rem; display: inline-block;background: #00c98d;position: relative;left: -.32rem;top: .05rem;"></span>{{i.m_s_name}}</h4>
			<div class="clearfix" style="padding: 0.3rem;">
				<div style="width: 25%;float: left;" v-for="(item,index) in i.content" v-if="item.length!=0">
					<img style="width:1.2rem;height: 1.6rem;" :src="item.book_cover" v-if="index<4" />
					<div v-if="index<4" style="overflow: hidden;    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;
    display: block;
    font-size: .24rem;
    line-height: .32rem;
    height: .32rem;
    text-align: left;">{{item.bookname}}</div>
					<div style="overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;
    display: block;
    font-size: .24rem;
    line-height: .32rem;
    height: .32rem;
    text-align: left;color: #999;" v-if="index<4">
						{{item.author_name}}
					</div>
				</div>

			</div>

			<div style="padding: 0.3rem;" v-for="(item,index) in i.content" v-if="index>3">
<div class="clearfix" style="border-top: 1px solid #f3f3f3;padding: .32rem .32rem .32rem 0;color: #333;">
	<div style="color: #333;
    line-height: .4rem;
    -webkit-box-flex: 1;overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;font-size: .3rem;float: left; width: 3rem;overflow: hidden;">
		{{item.bookname}}
	</div>
	<div style="font-size: .3rem;float: right;">
		<span style="color: #70a7e3;border-color: rgba(112,167,227,.3);display: inline-block;height: .36rem;line-height: .38rem;
    padding: 0 .11rem;
    border: 1px solid rgba(153,153,153,.3);
    border-radius: .04rem;
    font-size: .2rem;    margin-right: .08rem;
    vertical-align: text-bottom;
    background: transparent;">
							{{item.stat_name}}
						</span>
		<span style="color: #70a7e3;
    border-color: rgba(112,167,227,.3);display: inline-block;
    height: .36rem;
    line-height: .38rem;
    padding: 0 .11rem;
    border: 1px solid rgba(153,153,153,.3);
    border-radius: .04rem;
    font-size: .2rem;    margin-right: .08rem;
    vertical-align: text-bottom;
    background: transparent;">
							{{item.class_name}}
						</span>
	</div>

</div>
<div style="overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;
    font-size: .24rem;
    line-height: .32rem;
    height: .32rem;
    color: #999;">
	{{item.introduction}}
</div>
</div>
<div style="    width: 100%;
    height: .96rem;
    line-height: .96rem;
    color: #333;
    font-size: .28rem;
    vertical-align: middle;
    display: inline-block;
    text-align: center;border-top: 3px solid #f3f3f3">
	换一换
</div>
</div>
<div v-for="(i,ind) in ns_list" v-if="i._uniq" style="background: red; background: #fff; margin-top: .15rem;">
			<h4 style="text-indent: 1em; height: 0.58rem;  margin: 0.1rem 0 0rem;"><span style="width: 0.1rem;height:0.3rem;margin-top: 0.1rem; display: inline-block;background: #00c98d;position: relative;left: -.32rem;top: .05rem;"></span>{{i.m_s_name}}</h4>
			<div class="clearfix" style="padding: 0.3rem;">
				<div style="width: 25%;float: left;" v-for="(item,index) in i.content" v-if="item.length!=0">
					<img style="width:1.2rem;height: 1.6rem;" :src="item.book_cover" v-if="index<4" />
					<div v-if="index<4" style="overflow: hidden;    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;
    display: block;
    font-size: .24rem;
    line-height: .32rem;
    height: .32rem;
    text-align: left;">{{item.bookname}}</div>
					<div style="overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;
    display: block;
    font-size: .24rem;
    line-height: .32rem;
    height: .32rem;
    text-align: left;color: #999;" v-if="index<4">
						{{item.author_name}}
					</div>
				</div>

			</div>

			<div style="padding: 0.3rem;" v-for="(item,index) in i.content" v-if="index>3">
<div class="clearfix" style="border-top: 1px solid #f3f3f3;padding: .32rem .32rem .32rem 0;color: #333;">
	<div style="color: #333;
    line-height: .4rem;
    -webkit-box-flex: 1;overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;font-size: .3rem;float: left; width: 3rem;overflow: hidden;">
		{{item.bookname}}
	</div>
	<div style="font-size: .3rem;float: right;">
		<span style="color: #70a7e3;border-color: rgba(112,167,227,.3);display: inline-block;height: .36rem;line-height: .38rem;
    padding: 0 .11rem;
    border: 1px solid rgba(153,153,153,.3);
    border-radius: .04rem;
    font-size: .2rem;    margin-right: .08rem;
    vertical-align: text-bottom;
    background: transparent;">
							{{item.stat_name}}
						</span>
		<span style="color: #70a7e3;
    border-color: rgba(112,167,227,.3);display: inline-block;
    height: .36rem;
    line-height: .38rem;
    padding: 0 .11rem;
    border: 1px solid rgba(153,153,153,.3);
    border-radius: .04rem;
    font-size: .2rem;    margin-right: .08rem;
    vertical-align: text-bottom;
    background: transparent;">
							{{item.class_name}}
						</span>
	</div>

</div>
<div style="overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;
    font-size: .24rem;
    line-height: .32rem;
    height: .32rem;
    color: #999;">
	{{item.introduction}}
</div>
</div>
<div style="    width: 100%;
    height: .96rem;
    line-height: .96rem;
    color: #333;
    font-size: .28rem;
    vertical-align: middle;
    display: inline-block;
    text-align: center;border-top: 3px solid #f3f3f3">
	换一换
</div>
</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				selected: '外卖',
				sy_list: '',
				jp_list:'',
				ns_list:''
			};
		},
		created() {
			this.$http.get('https://bookstoreapi.shuqireader.com/eva_bookstore/v1/module/query?appId=1&pageId=1&channelId=&versionId=&ver=&shuqi_h5=&md5key=&userId=8000000&timestamp=1582426455&type=2&resetcache=&func_id=11%2C33%2C11%2C19%2C33%2C12%2C33%2C11%2C19%2C33&orderid=18%2C19%2C23%2C24%2C25%2C26%2C27%2C28%2C29%2C30&sign=738D6372AEBC50F9CD64E7EE7052528A&key=shuqiapi&_=1582426455787', {
				params: {
					appId: 1,
					pageId: 1,
					channelId: '',
					versionId: '',
					ver: '',
					shuqi_h5: '',
					md5key: '',
					userId: 8000000,
					timestamp: 1582426455,
					type: 2,
					resetcache: '',
					func_id: '11,33,11,19,33,12,33,11,19,33',
					orderid: '18,19,23,24,25,26,27,28,29,30',
					sign: '738D6372AEBC50F9CD64E7EE7052528A',
					key: 'shuqiapi',
					_: 1582426455787
				}
			}).then((data) => {
				this.ns_list = data.data.data.module
				console.log(this.ns_list)
			})
			this.$http.get('https://bookstoreapi.shuqireader.com/eva_bookstore/v1/module/query?appId=1&pageId=1&channelId=&versionId=&ver=&shuqi_h5=&md5key=&userId=8000000&timestamp=1582362633&type=2&resetcache=&func_id=11%2C33%2C11%2C19%2C33%2C11%2C33%2C11%2C19%2C33&orderid=8%2C9%2C10%2C11%2C12%2C13%2C14%2C15%2C16%2C17&sign=8292FE6939B3B5CA374F1683A567D1C6&key=shuqiapi&_=1582362633365', {
				params: {
					appId: 1,
					pageId: 1,
					channelId: '',
					versionId: '',
					ver: '',
					shuqi_h5: '',
					md5key: '',
					userId: 8000000,
					timestamp: 1582362633,
					type: 2,
					resetcache: '',
					func_id: '11,33,11,19,33,11,33,11,19,33',
					orderid: '8,9,10,11,12,13,14,15,16,17',
					sign: '8292FE6939B3B5CA374F1683A567D1C6',
					key: 'shuqiapi',
					_: 1582362633365
				}
			}).then((data) => {
				this.sy_list = data.data.data.module
				console.log(this.sy_list)
			})
			this.$http.get('https://bookstoreapi.shuqireader.com/eva_bookstore/v1/module/query?appId=1&pageId=1&channelId=&versionId=&ver=&shuqi_h5=&md5key=&userId=8000000&timestamp=1582424538&type=2&resetcache=&func_id=19&orderid=6&mid=6&lmkTxt=index&sign=E6E87CD25E8BC0ADEDFFBD3E94E0E8BD&key=shuqiapi&_=1582424538070', {
				params: {
					appId: 1,
					pageId: 1,
					channelId: '',
					versionId: '',
					ver: '',
					shuqi_h5: '',
					md5key: '',
					userId: 8000000,
					timestamp: 1582424538,
					type: 2,
					resetcache: '',
					func_id: 19,
					orderid: 6,
					mid: 6,
					lmkTxt: 'index',
					sign: 'E6E87CD25E8BC0ADEDFFBD3E94E0E8BD',
					key: 'shuqiapi',
					_: 1582424538070
				}
			}).then((data) => {
				this.jp_list = data.data.data.module
				console.log(this.jp_list)
			})
		}
	};
</script>

<style>
	.mint-tabbar {
		height: 1.2rem;
	}
	
	.mint-tab-item {
		height: 1rem;
	}
	
	.mint-tabbar .nav_zz {
		width: 0.7rem;
		height: 0.7rem;
		margin: 0rem auto 0.2rem;
		background-image: url('http://img-tailor.11222.cn/pm/book/operate/2017022317384553.png');
		/*background-repeat: no-repeat;*/
		background-size: 0.71rem auto;
		background-position: 0 2.8rem;
	}
	
	.clearfix:after {
		content: "020";
		display: block;
		height: 0;
		clear: both;
		visibility: hidden;
	}
	
	.clearfix {
		zoom: 1;
	}
</style>