<template>
	<div style="background: rgb(248,248,248);">
		<headeritem></headeritem>
		<div >
			<div v-for="i in data" v-if="i.m_s_name!=''" style="margin-bottom: .3rem; background: #fff; padding: .42rem .4rem;text-decoration: none;color: #333;">
				<div style="float: left; margin-top: .2rem;width: .6rem;height: .6rem;background: red;float: left;margin-right: .32rem;background-size: auto .6rem;">
					
				</div>
				<div style="padding: .12rem 0;position: relative;color: #333;">
					<h3 style="font-size: .3rem;font-weight: 400;">
						{{i.m_s_name}}
					</h3>
					<p style="font-size: .24rem;line-height: .3rem;margin-top: .16rem;">
						{{i.content.desc}}
					</p>
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
			this.$http.get('https://bookstoreapi.shuqireader.com/eva_bookstore/v1/stencil/query?appId=1&pageId=4&channelId=&versionId=&ver=&shuqi_h5=&md5key=&userId=8000000&timestamp=1582381867&type=2&resetcache=&sign=406E5EA5DD18A4F4555874D9F93E3086&key=shuqiapi&_=1582381867757', {
				params: {
					appId: 1,
					pageId: 4,
					channelId: '',
					versionId: '',
					ver: '',
					shuqi_h5: '',
					md5key: '',
					userId: 8000000,
					timestamp: 1582381867,
					type: 2,
					resetcache: '',
					sign: '406E5EA5DD18A4F4555874D9F93E3086',
					key: 'shuqiapi',
					_: 1582381867757
				}
			}).then((data) => {
				//							console.log(data.data.data)
				this.data = data.data.data.module
				console.log(this.data)
			})
		}
		
	}
</script>

<style>
</style>