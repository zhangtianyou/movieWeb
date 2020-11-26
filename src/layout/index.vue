<template>
	<div class="index-contain">
		<v-carousel>
          <v-carousel-item
            v-for="(item,i) in items"
            :key="i"
            :src="item.src"
            reverse-transition="fade-transition"
            transition="fade-transition"
          ></v-carousel-item>
        </v-carousel>

	</div>
</template>

<script>
import {getRequest} from './../utils/request'
export default{
    name:'index',
    data(){
		return {
			items:[
				{src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'},
				{src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'},
				{src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'}
			]
		}
	},
	mounted(){

	},
	beforeUpdate(){

	},
	methods:{

	}
}
</script>

<style lang="scss">
@import './../assets/scss/base.scss';
@import './../assets/scss/config.scss';
.index-contain{

}
</style>