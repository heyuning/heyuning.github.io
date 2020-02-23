<template>
	<div style="background: rgb(248,248,248);">
		<headeritem></headeritem>
		<div>
			<div v-for="i in data" v-if="i._uniq" style="background: red; background: #fff; margin-top: .15rem;">
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
    word-break: break-all;font-size: .3rem;float: left; width: 3rem;overflow: hidden;" >
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
	</div>
</template>

<script>
	import headeritem from './headeritem'
	export default {
		components:{
			headeritem
		},
		data(){
			return{
				data:''
			}
		},
		created(){
			this.$http.get('https://bookstoreapi.shuqireader.com/eva_bookstore/v1/stencil/query?appId=1&pageId=2&channelId=&versionId=&ver=&shuqi_h5=&md5key=&userId=8000000&timestamp=1582384892&type=2&resetcache=&sign=EAD581BC3B4EBF5DFF125786EE825707&key=shuqiapi&_=1582384892837', {
				params: {
					appId: 1,
					pageId: 2,
					channelId: '',
					versionId: '',
					ver: '',
					shuqi_h5: '',
					md5key: '',
					userId: 8000000,
					timestamp: 1582384892,
					type: 2,
					resetcache: '',
					sign: 'EAD581BC3B4EBF5DFF125786EE825707',
					key: 'shuqiapi',
					_: 1582384892837
				}
			}).then((data) => {
				this.data = data.data.data.module
				console.log(this.data)
			})
		}
		
	}
</script>

<style>
</style>