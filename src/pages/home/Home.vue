<template>	
	<div>
		<home-header></home-header>
	</div>	
</template>

<script type="text/javascript">
import HomeHeader from './components/Header'
export default {
	name: 'Home',
	components: {
		HomeHeader
	}
}
</script>

<style type="text/css">
	.home {
		font-size: 50px;
	}
</style>