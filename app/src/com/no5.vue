<template>
	<div style="background: rgb(248,248,248);">
		<headeritem></headeritem>
		<div style="padding: 0 .3rem; background: #fff;">
			<div v-for="i in data" style=" color: #333;padding: .4rem .32rem .4rem 0;display: -webkit-box;border-bottom: 1px solid #f3f3f3;">
				<div style="-webkit-box-flex: 1;margin-right: .32rem;">
					<h3 style="font-weight: 400;color: #333;font-size: .32rem;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;word-break: break-all;">
						{{i.title}}
					</h3>
					<p style="font-size: .24rem;
    height: .72rem;
    color: #999;
    line-height: .36rem;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    margin-top: .22rem;
    max-height: 100%;">
						{{i.sdesc}}
					</p>
					<div style="font-size: 0;height: .44rem;margin-top: .16rem;overflow: hidden;">
						<span style="font-size: .2rem;height: .36rem;line-height: .38rem;border: 1px solid rgba(153,153,153,.3);border-radius: .04rem;padding: 0 .1rem;margin-right: .08rem;color: #999;display: inline-block;">
							{{i.tags}}
						</span>
						
					</div>
				</div>
				<div style="width: 1.68rem;height: 1.6rem;position: relative;overflow: hidden;margin-top: .22rem;">
					<div style="left: 0;width: .9rem;height: 1.2rem;bottom: 0;z-index: 1;position: absolute;">
						<img :src="i.items[0].cover" style="display: block;position: absolute;top: 50%;left: 50%;    transform: translate(-50%,-50%);min-width: 100%;min-height: 100%;height: 100%;" />
					</div>
					<div style="width: 1.2rem;
    height: 1.6rem;
    bottom: 0;
    left: 50%;
    -webkit-transform: translate(-50%,0);
    transform: translate(-50%,0);
    z-index: 2;position: absolute;display: block;">
						<img :src="i.items[1].cover" style="display: block;
    position: absolute;
    top: 50%;
    left: 50%;    transform: translate(-50%,-50%);
    min-width: 100%;
    min-height: 100%;
    height: 100%;">
					</div>
					<div style="width: .9rem;
    height: 1.2rem;
    bottom: 0;
    z-index: 1;    right: 0;position: absolute;display: block;">
						<img style="display: block;
    position: absolute;
    top: 50%;
    left: 50%;transform: translate(-50%,-50%);
    min-width: 100%;
    min-height: 100%;
    height: 100%;" :src="i.items[2].cover"/>
					</div>
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
			this.$http.get('https://read.xiaoshuo1-sm.com/novel/i.php?do=is_pay_sdlist&page=1&size=10&shuqi_h5=&onlyCpBooks=1&_=1582387023430', {
				params: {
					'do': 'is_pay_sdlist',
					'page': 1,
					'size': 10,
					'shuqi_h5': '',
					'onlyCpBooks': 1,
					'_': 1582387023430
				}
			}).then((data) => {
				this.data = data.data.data
				console.log(this.data)
			})
		}
		
	}
</script>

<style>
	
</style>