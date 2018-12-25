<template>	
	<div>
		<home-header></home-header>
		<home-swiper></home-swiper>
	</div>	
</template>

<script type="text/javascript">
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
export default {
	name: 'Home',
	components: {
		HomeHeader,
		HomeSwiper
	}
}
</script>

<style type="text/css">
	.home {
		font-size: 50px;
	}
</style>