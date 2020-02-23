<template>
	<div style="background: rgb(248,248,248);">
		<headeritem></headeritem>
		<div>
			<div style=" font-size: .24rem;padding-top: .27rem;padding-bottom: .2rem;padding-left: .32rem;color: #999;">女生分类</div>
			<div v-for="(i,$key) in data.girl" style="border-bottom:2px solid rgb(248,248,248) ; padding: .28rem .32rem;padding-right: 0;background-color: #fff;display: block;text-decoration: none;color: #333;">
				<div style="margin-top: .1rem; float: left; background: pink; height: .73rem;width: .72rem;background-size: 100%;margin-right: .2rem;">
					
				</div>
				<div v-for="(item,$key) in i" style="color: #333;font-size: .28rem;margin-bottom: .12rem;margin-top: .1rem;">
					{{$key}}
				</div>
				<div v-for="(item,$key) in i"  style="font-size: .24rem;overflow: hidden;color: #999;">
					<span  v-for="(items,$key) in item.list" style="margin-right: 0.1rem; max-width: 1.4rem;display: inline-block;vertical-align: text-top;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;word-break: break-all;">
						{{items}}
					</span>
					
				</div>
			</div>
			<div style=" font-size: .24rem;padding-top: .27rem;padding-bottom: .2rem;padding-left: .32rem;color: #999;">男生分类</div>
			<div v-for="(i,$key) in data.boy" style="border-bottom:2px solid rgb(248,248,248) ; padding: .28rem .32rem;padding-right: 0;background-color: #fff;display: block;text-decoration: none;color: #333;">
				<div style="margin-top: .1rem; float: left; background: pink; height: .73rem;width: .72rem;background-size: 100%;margin-right: .2rem;">
					
				</div>
				<div v-for="(item,$key) in i" style="color: #333;font-size: .28rem;margin-bottom: .12rem;margin-top: .1rem;">
					{{$key}}
				</div>
				<div v-for="(item,$key) in i"  style="font-size: .24rem;overflow: hidden;color: #999;">
					<span  v-for="(items,$key) in item.list" style="margin-right: 0.1rem; max-width: 1.4rem;display: inline-block;vertical-align: text-top;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;word-break: break-all;">
						{{items}}
					</span>
					
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
			this.$http.post('http://content.shuqireader.com/webapi/rank/classrelation?_=1581484692928', {
					type: 1,
					timestamp: 1581484692899,
					sign: 'e7419fd7c18fb83ab141b5bf15281555',
					shuqi_h5: ''
				}, {
					emulateJSON: true
				}).then((data) => {
					this.data = data.data.data
					console.log(this.data)
					
				})
		}
		
	}
</script>

<style>
</style>