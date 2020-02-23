<template>
	<div>
		<mt-header :title="tltle_header">
	  <router-link to="/" slot="left">
	    <mt-button icon="back">返回</mt-button>
	  </router-link>
	  <mt-button icon="more" slot="right"></mt-button>
	</mt-header>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				tltle_header:'1'
			}
		},
		created(){
			
			this.tltle_header=this.$route.name
			console.log( this.tltle_header)
		}
	}
</script>

<style>
	.mint-header{
		background: #fff;
		color: #000;
		
	}
</style>