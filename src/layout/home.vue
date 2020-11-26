<template>
	<div>
		<nav-header></nav-header>
		<transition>
			<router-view></router-view>
		</transition>
		<!-- <nav-footer></nav-footer> -->
	</div>
</template>
<script>
import NavHeader from './NavHeader'
import NavFooter from './NavFooter'
export default{
	name:'nav-home',
	components:{
		NavHeader,
		NavFooter
	}
}
</script>
<style>

</style>